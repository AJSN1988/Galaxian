// Main game object

import { Player, BlueEnemy, PurpleEnemy, RedEnemy, GeneralEnemy, Bullet, Rocket, EnemyExplode, PlayerExplode } from './entities';
import { Background, Text, PlayerLive, WaveLabel } from './gui';
import InputController from './input';
import Settings from './settings';
import Vector2d from './vector';
import AudioController from './sound';

const SETTINGS = Settings.scene;

class Game {
    constructor(canvas, user) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.username = user.toUpperCase();
        this.updateRequest;
        this.inputController;
        this.onPause = false;
        this.background;
        this.player;
        this.rebornReady = false;
        this.enemies = [];
        this.attackingEnemies = [];
        this.killed = 0;
        this.maxEnemies;
        this.bullet;
        this.rockets = [];
        this.shots = 2;
        this.maxRockets = 20;
        this.playerBullets = 0;
        this.maxPlayerBullets = 1;
        this.generalEnemyTimer = 0;
        this.generalReady = false;
        this.enemyExplode;
        this.playerExplode;
        this.score = 0;
        this.scoreText;
        this.userScoreText;
        this.highScore = 5000;
        this.highScoreText;
        this.highScoreLabel;
        this.lives = [];
        this.livesCount = SETTINGS.player.lives;
        this.maxLivesCount = SETTINGS.player.maxLives;
        this.addLiveCount = SETTINGS.nextLive;
        this.wavesCount = 1;
        this.waveLabel;
        this.wavesTextLabel;
        this.readyLabel;
        this.pauseLabel;
        this.gameOverLabel;
        this.restartLabel;
        this.gameOver = false;
        this.leaderBoard = [];
        this.clearSceneTimer;
        this.playerRebornTimer;
        this.gameOverTimer;
        this.resetTimer;
        this.disablePause = false;
        this.soundContoller = new AudioController();
        this.allSounds = this.soundContoller.sounds;
    }
    get maxEnemies() {
        return SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions +
            SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions +
            SETTINGS.redEnemies.count * SETTINGS.redEnemies.divisions +
            SETTINGS.generalEnemies.count * SETTINGS.generalEnemies.divisions;
    }

    // Draw objects
    _drawObject(context, object) {
        context.fillStyle = object.sprite;
        context.fillRect(object.x, object.y, object.width, object.height);
    }

    _getRandom(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    _cloneGeneralGroup(generalClone, minionClones) {
        // Cloning general only or general with minioins

        // Clone general, set waypoints and add to attacking enemies arr
        let g = new GeneralEnemy(this.context, new Vector2d(generalClone.position.x, generalClone.position.y));
        g.attack = true;
        g.proto = generalClone;
        let gWays = this._generateWaypoints(g, 'hard');
        g.setWaypoints(gWays);
        this.attackingEnemies.push(g);

        // Clone minions, set waypoints and add to attacking enemies arr
        let m = [];

        minionClones.forEach(minion => {
            let clone = minion;
            let red = new RedEnemy(this.context, new Vector2d(clone.position.x, clone.position.y));
            red.attack = true;
            red.proto = clone;
            let offsetX = red.position.x - g.position.x;
            let offsetY = red.position.y - g.position.y;

            g.waypoints.forEach(wp => {
                // Set minion waypoints from general ways
                red.waypoints.push(new Vector2d(wp.x + offsetX, wp.y + offsetY));
            });
            this.attackingEnemies.push(red);
            m.push(red);
        });

        return { general: g, minions: m };
    }

    _genAttack(enemies, attackType) {
        if (attackType == 'general') {
            // Generals attack
            let generals = enemies.filter(g => {
                if (g instanceof GeneralEnemy && !g.hide) return true;
            });
            // Check alive generals
            if (generals.length) {
                // Attack alive generals
                let active; // ACtive general

                // Get general
                if (generals.length == 2) {
                    active = generals[this._getRandom(0, 1)];
                } else {
                    active = generals[0];
                }
                // Get general's minions
                let minions = enemies.filter(r => {
                    if (r instanceof RedEnemy && !r.hide && r.general == active) return true;
                });

                if (minions.length >= 2) {
                    // Attack with 2 minioins
                    let red1 = 0;
                    let red2 = 0;
                    do {
                        red1 = minions[this._getRandom(0, minions.length - 1)];
                        red2 = minions[this._getRandom(0, minions.length - 1)];
                    }
                    while (red1 == red2)

                    let group = this._cloneGeneralGroup(active, [red1, red2]);
                    active.hide = true;
                    this.enemies.push(group.general);

                    red1.hide = true;
                    this.enemies.push(group.minions[0]);
                    red2.hide = true;
                    this.enemies.push(group.minions[1]);
                } else if (minions.length == 1) {
                    // Attack with 1 minion
                    let red = minions[0];
                    let group = this._cloneGeneralGroup(active, [red]);
                    active.hide = true;
                    this.enemies.push(group.general);

                    red.hide = true;
                    this.enemies.push(group.minions[0]);
                } else {
                    // Attack only general
                    let general = this._cloneUnit(active, 'hard');
                    active.hide = true;
                    this.enemies.push(general);
                }
            } else {
                // Only minions attack
                let group = this._createAttackGroup(enemies, 'red');
                let unit = group[this._getRandom(0, group.length - 1)];

                if (unit != undefined && group.length) {
                    unit.hide = true;
                    this.enemies.push(this._cloneUnit(unit, 'hard'));
                }

            }
        } else if (attackType == 'single-blue') {
            // Easy attack only one blue enemy                
            let group = this._createAttackGroup(enemies, 'blue');
            let unit = group[this._getRandom(0, group.length - 1)];

            if (unit != undefined && group.length) {
                unit.hide = true;
                this.enemies.push(this._cloneUnit(unit));
            }
        } else if (attackType == 'double-blue') {
            // Easy attack couple enemies
            let group = this._createAttackGroup(enemies, 'blue');
            let id1 = 0;
            let id2 = 0;
            // Prevent infinite loop
            if (group.length >= 2) {
                do {
                    id1 = this._getRandom(0, group.length - 1);
                    id2 = this._getRandom(0, group.length - 1);
                }
                while (id1 == id2)
            } else {
                return false;
            }

            let unit1 = group[id1];
            let unit2 = group[id2];

            if (unit1 != undefined && unit2 != undefined) {
                unit1.hide = true;
                this.enemies.push(this._cloneUnit(unit1));
                unit2.hide = true;
                this.enemies.push(this._cloneUnit(unit2));
            }
        } else if (attackType == 'double-blue-single-purple') {
            // Hard attack with couple blue enemies and single purple enemy

            // Blue enemies
            let blueGroup = this._createAttackGroup(enemies, 'blue'); // this array never be is empty
            let id1 = 0;
            let id2 = 0;
            // Prevent infinite loop
            if (blueGroup.length >= 2) {
                do {
                    id1 = this._getRandom(0, blueGroup.length - 1);
                    id2 = this._getRandom(0, blueGroup.length - 1);
                }
                while (id1 == id2)
            } else {
                return false;
            }

            let unit1 = blueGroup[id1];
            let unit2 = blueGroup[id2];

            if (unit1 != undefined && unit2 != undefined && blueGroup.length) {
                unit1.hide = true;
                this.enemies.push(this._cloneUnit(unit1));
                unit2.hide = true;
                this.enemies.push(this._cloneUnit(unit2));
            }

            // Purple enemy
            let purpleGroup = this._createAttackGroup(enemies, 'purple');
            let purpleUnit = purpleGroup[this._getRandom(0, purpleGroup.length - 1)];

            if (purpleGroup != undefined && purpleGroup.length) {
                purpleUnit.hide = true;
                this.enemies.push(this._cloneUnit(purpleUnit, 'hard'));
            }


        } else if (attackType == 'single-blue-single-purple') {
            // Hard attack with single blue enemie and single purple enemy

            // Blue enemy          
            let blueGroup = this._createAttackGroup(enemies, 'blue');
            let unit = blueGroup[this._getRandom(0, blueGroup.length - 1)];

            if (unit != undefined && blueGroup.length) {
                unit.hide = true;
                this.enemies.push(this._cloneUnit(unit));
            }
            // Purple enemy
            let purpleGroup = this._createAttackGroup(enemies, 'purple');
            let purpleUnit = purpleGroup[this._getRandom(0, purpleGroup.length - 1)];

            if (purpleUnit != undefined && purpleGroup.length) {
                purpleUnit.hide = true;
                this.enemies.push(this._cloneUnit(purpleUnit, 'hard'));
            }
        } else if (attackType == 'single-purple') {
            // Hard attack with single purple enemy
            let purpleGroup = this._createAttackGroup(enemies, 'purple');
            let purpleUnit = purpleGroup[this._getRandom(0, purpleGroup.length - 1)];

            if (purpleUnit != undefined && purpleGroup.length) {
                purpleUnit.hide = true;
                this.enemies.push(this._cloneUnit(purpleUnit, 'hard'));
            }
        }
        this.attackTimer = undefined;
    }

    _createAttackGroup(enemies, type) {
        // Create group units waiting attack
        let group;
        if (type == 'blue') {
            group = enemies.filter(en => {
                if (en instanceof BlueEnemy && !en.hide) return true;
            });
        } else if (type == 'purple') {
            group = enemies.filter(en => {
                if (en instanceof PurpleEnemy && !en.hide) return true;
            });
        } else if (type == 'red') {
            group = enemies.filter(en => {
                if (en instanceof RedEnemy && !en.hide) return true;
            });
        }
        // Very very bad code for find left or right bordered units
        let minPosition = 1000;
        let maxPosition = 0;
        group.forEach(en => {
            if (en.position.x < minPosition) minPosition = en.position.x;
            if (en.position.x > maxPosition) maxPosition = en.position.x;
        });
        group = group.filter((en) => {
            if (en.position.x == minPosition || en.position.x == maxPosition) return true;
        });

        return group;
    }

    _cloneUnit(clone, mode) {
        // Cloning attack enemy unit, generate waypoints and retern it
        let u;
        if (clone instanceof BlueEnemy) {
            u = new BlueEnemy(this.context, new Vector2d(clone.position.x, clone.position.y));
        } else if (clone instanceof PurpleEnemy) {
            u = new PurpleEnemy(this.context, new Vector2d(clone.position.x, clone.position.y));
        } else if (clone instanceof GeneralEnemy) {
            u = new GeneralEnemy(this.context, new Vector2d(clone.position.x, clone.position.y));
        } else if (clone instanceof RedEnemy) {
            u = new RedEnemy(this.context, new Vector2d(clone.position.x, clone.position.y));
        }

        u.attack = true;
        u.proto = clone;
        let ways;
        if (!mode) {
            ways = this._generateWaypoints(u, 'easy');
        } else {
            ways = this._generateWaypoints(u, 'hard');
        }

        u.setWaypoints(ways);
        this.attackingEnemies.push(u);

        return u;
    }

    _generateWaypoints(unit, mode) {
        // Generate and return enemy waypoints
        let waypoints = [];
        let ways = (mode == 'easy') ? ways = this._getRandom(4, 6) : ways = this._getRandom(5, 8);
        // Generate first waypoint
        let first = new Vector2d(0, 0);
        // First x position
        if (unit.position.x <= 100) {
            // Move left easy      
            first.x = this._getRandom(0, unit.position.x - unit.size.width);
        } else if (unit.position.x > 101 && unit.position.x <= 175) {
            // Move left hard
            first.x = this._getRandom(unit.size.width * 2, unit.position.x - unit.size.width);
        } else if (unit.position.x > 175 && unit.position.x <= 275) {
            //Move roght hard
            first.x = this._getRandom(unit.size.width * 2, unit.position.x + unit.size.width);
        } else if (unit.position.x > 275) {
            // Move right easy
            first.x = this._getRandom(unit.size.width, unit.position.x + unit.size.width);
        }
        // First y position
        if (unit.position.y == 220) {
            // Bottom blue enemy position in y
            first.y = this._getRandom(unit.position.y, 300);
        } else if (unit.position.y == 190) {
            // Blue middle row enemy position in y
            first.y = this._getRandom(unit.position.y + unit.size.height * 3, 300);
        } else if (unit.position.y == 160) {
            // Blue top row enemy position in y
            first.y = this._getRandom(unit.position.y + unit.size.height * 5, 300);
        } else if (unit.position.y == 130) {
            // Purple enemy position in y
            first.y = this._getRandom(unit.position.y + unit.size.height * 7, 300);
        } else if (unit.position.y == 100) {
            // Red enemy position in y
            first.y = this._getRandom(unit.position.y + unit.size.height * 9, 300);
        } else if (unit.position.y == 75) {
            first.y = this._getRandom(unit.position.y + unit.size.height * 11, 300);
        }
        waypoints.push(first);

        // Aimed fire waypoint
        let offsetX = 50; // Target offset in x axis
        let offsetY = 120; // Target offset in y axis

        // Target position
        let target = this.player.position;
        waypoints.push(new Vector2d(
            target.x + (this._getRandom(offsetX * -1, offsetX)),
            unit.position.y + (this._getRandom(120, 180))
        ));
        offsetY = 180;

        // Add another waypoints (0 and 1 element we already using, start with 2 index)
        for (let i = 2; i < ways; i++) {
            waypoints.push(new Vector2d(
                target.x + (this._getRandom(offsetX * -1, offsetX)),
                unit.position.y + this._getRandom(offsetY, offsetY)
            ));
            offsetX += 50;
            offsetY += 50;
        }

        // Add tail waypoints for overscreen hide unit
        waypoints.push(new Vector2d(this.player.position.x, 650));
        if (unit.position.x <= 150) {
            waypoints.push(new Vector2d(-40, 650));
            waypoints.push(new Vector2d(-40, 100));
            waypoints.push(new Vector2d(unit.proto.position.x, unit.proto.position.y));
        } else {
            waypoints.push(new Vector2d(440, 650));
            waypoints.push(new Vector2d(440, 100));
            waypoints.push(new Vector2d(unit.proto.position.x, unit.proto.position.y));
        }

        // console.log(waypoints);
        return waypoints;
    }

    _genNewWave() {
        // Generate new enemy wave (just set hide prop in false on an each enemy object) and updatee wave counter
        if (this.killed == this.maxEnemies) {
            this.enemies.forEach(enemy => {
                enemy.hide = false;
            });
            // Change waves counter
            this.wavesCount++;
            this.wavesTextLabel.setText(`: ${this.wavesCount}`);
            // Get enemy attack timer
            this.generalEnemyTimer = 0;
            // Clear killed counter
            this.killed = 0;
            // Start enemies attacking timer
            this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'single-blue') }, 1000);
            this.disablePause = false;
        }
    }

    _gameOver() {
        if (!this.gameOver && !this.onPause) {
            clearTimeout(this.gameOverTimer);
            this.gameOverTimer = undefined;
            // Check score
            this._checkRecord();
            // Generate leaderboard
            this._createLeaderboard();
            this.gameOver = true;
        }
    }

    _checkRecord() {
        // Compare final score with leaderboard object and add score and user into if need
        this.userScoreText = new Text(this.context, new Vector2d(80, 490), `${this.username}, YOUR SCORE - ${this.score}, WAVES - ${this.wavesCount}`, 'red', 250, 17);
        let leaders = SETTINGS.leaderboard;

        let add = true;
        let duplicate = 0;
        for (let i = 0; i < leaders.length; i++) {
            const e = leaders[i];
            if (e.user == this.username && this.score < e.score) {
                add = false;
            } else if (e.user == this.username) {
                duplicate = i;
            }
        }
        // Add or detec duplicate username and rewrite his score if need
        if (add && !duplicate) {
            leaders.push({
                user: this.username,
                score: this.score
            });
        } else if (add && duplicate) {
            leaders[duplicate].score = this.score;
        }
        // Sort by score
        leaders.sort((a, b) => {
            if (a.score > b.score) return -1;
            if (a.score < b.score) return 1;
        });
        // Rewrite leaderboard obj
        SETTINGS.leaderboard = leaders.slice(0, 10);
    }

    _playerCollision(opponent) {
        // Detect player collision with opponent, changing lives and game over init
        if (this.player.collision(opponent) && !this.player.hide) {
            // Explode animation
            if (opponent instanceof BlueEnemy || opponent instanceof PurpleEnemy || opponent instanceof RedEnemy || opponent instanceof GeneralEnemy) {
                // Collision with attacking enemy
                opponent.kill();
                this.killed++;
                // Delete this unit from attacking array
                this.attackingEnemies.splice(this.attackingEnemies.indexOf(opponent), 1);
                // Delete this unit from enemies array
                this.enemies.splice(this.enemies.indexOf(opponent), 1);
            }
            // Hide player
            this.player.hide = true;
            // Ready to reborning state
            this.rebornReady = true;
            // Player explode animation                    
            this.playerExplode.setPosition(new Vector2d(this.player.position.x, this.player.position.y));
            this.playerExplode.hide = false;

            // Remove live
            this.livesCount--;
            let lives = this.lives.filter(l => {
                if (!l.hide) return true;
            });
            lives.pop().hide = true;

            // Play destroy sound
            this.soundContoller.play(this.allSounds.playerExplode, 0.5);
        }
    }

    _enemyCollision(enemy) {
        // Detect enemy collision with player's bullet

        // Check attacking enemy
        if (enemy.collision(this.bullet) && !enemy.hide) {
            // Collision with player bullet
            this.bullet.setPosition(new Vector2d(1000, 1000)); // Relocate bullet
            // Explode animation
            this.enemyExplode.setPosition(new Vector2d(enemy.position.x, enemy.position.y));
            this.enemyExplode.hide = false;
            if (enemy.attack) {
                // Check attacking enemy
                enemy.kill();
                this.killed++;
                // Delete this unit from attacking array
                this.attackingEnemies.splice(this.attackingEnemies.indexOf(enemy), 1);
                // Delete this unit from enemies array
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
                // Change score
                this.score += enemy.cost * 2;
                this.scoreText.setText(`SCORE: ${this.score}`);
            } else {
                enemy.hide = true;
                this.killed++;
                // Change score
                this.score += enemy.cost;
                this.scoreText.setText(`SCORE: ${this.score}`);
            }

            if (this.score > this.highScore) this.highScoreText.setText(this.score);
            // Add player's live
            if (this.score > this.addLiveCount) {
                this.addLiveCount *= 2;
                if (this.livesCount < this.maxLivesCount) {
                    this.lives[this.livesCount].hide = false;
                    this.livesCount++;
                }
            }

            // PLay sound
            this.soundContoller.play(this.allSounds.enemyExplode, 0.1);
        }
    }

    _createLeaderboard() {
        // Leaderboard
        let leadersPosition = new Vector2d(130, 240);
        this.leaderBoard.push(new Text(this.context, leadersPosition, 'L E A D E R B O A R D', 'orange', 150, 17));
        leadersPosition = leadersPosition.add(new Vector2d(0, 10));
        for (const i in SETTINGS.leaderboard) {
            leadersPosition = leadersPosition.add(new Vector2d(0, 20));
            let userPos = leadersPosition.add(new Vector2d(-20, 0));
            let user = new Text(this.context, userPos, `${SETTINGS.leaderboard[i].user}`, 'purple', 100, 17);
            this.leaderBoard.push(user);
            let scorePos = leadersPosition.add(new Vector2d(60, 0));
            let score = new Text(this.context, scorePos, `SCORE - ${SETTINGS.leaderboard[i].score}`, 'purple', 200, 17);
            this.leaderBoard.push(score);
        }
    }

    // Build initial state game scene and collect game objects
    _build() {
        // Get enemy attack timer
        this.generalEnemyTimer = 0;
        // Create background
        this.background = new Background(this.canvas);
        // Build input controller
        this.inputController = new InputController(window);
        // Listen input events
        this.inputController.listen();

        // Draw background
        this.context.fillStyle = SETTINGS.background.sprite;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Create GUI

        // Player score
        this.scoreText = new Text(this.context, new Vector2d(13, 25), `SCORE: ${this.score}`, SETTINGS.text.score.color, SETTINGS.text.score.width, 15);
        // High score
        this.highScoreLabel = new Text(this.context, new Vector2d(143, 25), `HIGH: `, 'red', 50);
        this.highScoreText = new Text(this.context, new Vector2d(186, 25), `${this.highScore}`, SETTINGS.text.highScore.color, SETTINGS.text.highScore.width, 15);
        // Player lives
        let livesPosition = new Vector2d(245, 12);
        for (let i = 0; i < this.maxLivesCount; i++) {
            livesPosition = livesPosition.add(new Vector2d(15, 0));
            let l = new PlayerLive(this.context, livesPosition);
            this.lives.push(l);
            if (i >= this.livesCount) l.hide = true;
        }
        // Create wave sprite label
        this.waveLabel = new WaveLabel(this.context, new Vector2d(350, 14));
        // Create waves count
        this.wavesTextLabel = new Text(this.context, new Vector2d(365, 25), `: ${this.wavesCount}`, SETTINGS.text.wave.color, SETTINGS.text.wave.width, 15);
        // Ready label
        this.readyLabel = new Text(this.context, new Vector2d(170, 350), 'R E A D Y', 'red', 100, 17);
        // Pause label
        this.pauseLabel = new Text(this.context, new Vector2d(170, 350), 'P A U S E', 'red', 100, 17);
        // Game over label
        this.gameOverLabel = new Text(this.context, new Vector2d(135, 160), 'G A M E   O V E R', 'red', 150, 17);
        // Restart label
        this.restartLabel = new Text(this.context, new Vector2d(130, 200), 'PRESS SPACE FOR RESTART', 'white', 150, 15);

        // Create player object       
        this.player = new Player(this.context, new Vector2d(185, 560));
        // Using overlimits coordinates to prevent bullet update method
        this.bullet = new Bullet(this.context, new Vector2d(1000, 1000));

        // Create enemy rockets pool
        for (let i = 0; i < this.maxRockets; i++) {
            this.rockets.push(new Rocket(this.context, new Vector2d(1300, 1300)));
        }

        // Create enemy xplode object
        this.enemyExplode = new EnemyExplode(this.context, new Vector2d(220, 220), 2);
        this.enemyExplode.hide = true; // Hide explode for optimize

        // Create player's explode object
        this.playerExplode = new PlayerExplode(this.context, new Vector2d(250, 250), 5);
        this.playerExplode.hide = true; // Hide xplode


        // Create eneies object and collect them in array

        let nextPositionX = SETTINGS.blueEnemies.position.x;
        let nextPositionY = SETTINGS.blueEnemies.position.y;
        let countEnemies = SETTINGS.blueEnemies.count;
        let divisions = SETTINGS.blueEnemies.divisions;
        // Build blue enemies
        for (let i = 0; i < countEnemies; i++) {
            let x = nextPositionX;
            nextPositionX += SETTINGS.blueEnemies.position.width;
            for (let j = 0; j < divisions; j++) {
                let y = nextPositionY + (j * 30);
                let enemy = new BlueEnemy(this.context, new Vector2d(x, y));
                this.enemies.push(enemy);
            }
        }
        // Build purple enemies
        nextPositionX = SETTINGS.purpleEnemies.position.x;
        nextPositionY = SETTINGS.purpleEnemies.position.y;
        countEnemies = SETTINGS.purpleEnemies.count;
        for (let i = 0; i < countEnemies; i++) {
            let enemy = new PurpleEnemy(this.context, new Vector2d(nextPositionX, nextPositionY));
            nextPositionX += SETTINGS.purpleEnemies.position.width;
            this.enemies.push(enemy);
        }

        // Build general enemies
        nextPositionX = SETTINGS.generalEnemies.position.x;
        nextPositionY = SETTINGS.generalEnemies.position.y;
        countEnemies = SETTINGS.generalEnemies.count;
        let generals = []
        for (let i = 0; i < countEnemies; i++) {
            let enemy = new GeneralEnemy(this.context, new Vector2d(nextPositionX, nextPositionY));
            nextPositionX += SETTINGS.generalEnemies.position.width + SETTINGS.generalEnemies.position.spacing;
            this.enemies.push(enemy);
            generals.push(enemy);
        }

        // Build red enemies
        nextPositionX = SETTINGS.redEnemies.position.x;
        nextPositionY = SETTINGS.redEnemies.position.y;
        countEnemies = SETTINGS.redEnemies.count;
        let div = countEnemies / SETTINGS.generalEnemies.count;
        for (let i = 0; i < countEnemies; i++) {
            let enemy = new RedEnemy(this.context, new Vector2d(nextPositionX, nextPositionY));
            nextPositionX += SETTINGS.redEnemies.position.width;
            this.enemies.push(enemy);
            // Add general
            if (i < div) {
                enemy.general = generals[0];
            } else {
                enemy.general = generals[1];
            }
        }

        // Create regular waypoints for all enemies
        this.enemies.forEach(enemy => {
            let x = enemy.position.x;
            let y = enemy.position.y;
            // Add regular waypoints
            enemy.setWaypoints(
                new Vector2d(x - 20, y),
                new Vector2d(x + 30, y)
            );
        });

        // Start enemies attacking timer
        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'single-blue') }, 1000);
    }

    _destroy() {
        this.background = null;
        this.player = null;
        this.rebornReady = false;
        this.enemies = [];
        this.attackingEnemies = [];
        this.killed = 0;
        this.bullet = null;
        this.rockets = [];
        this.generalEnemyTimer = 0;
        this.generalReady = false;
        this.enemyExplode = null;
        this.playerExplode = null;
        this.score = 0;
        this.scoreText = null;
        this.userScoreText = null;
        this.highScoreText = null;
        this.highScoreLabel = null;
        this.lives = [];
        this.livesCount = SETTINGS.player.lives;
        this.maxLivesCount = SETTINGS.player.maxLives;
        this.addLiveCount = SETTINGS.nextLive;
        this.wavesCount = 1;
        this.waveLabel = null;
        this.wavesTextLabel = null;
        this.readyLabel = null;
        this.pauseLabel = null;
        this.gameOverLabel = null;
        this.restartLabel = null;
        this.gameOver = false;
        this.leaderBoard = [];
        clearTimeout(this.attackTimer);
        this.attackTimer = undefined;
        clearTimeout(this.clearSceneTimer);
        this.clearSceneTimer = undefined;
        clearTimeout(this.playerRebornTimer);
        this.playerRebornTimer = undefined;
        clearTimeout(this.gameOverTimer);
        this.gameOverTimer = undefined;
        clearTimeout(this.resetTimer);
        this.resetTimer = undefined;
    }

    // Update all game objects
    _update() {
        if (!this.onPause && !this.gameOver || this.disablePause) {
            // Set pause status
            this.onPause = this.inputController.pause;

            // Update timer for general enemy attack
            this.generalEnemyTimer++;

            // Rendering background
            this.background.update();

            // Rendering GUI
            this.scoreText.update();
            this.highScoreLabel.update();
            this.highScoreText.update();
            // PLayer lives
            this.lives.forEach(l => {
                l.update();
            });
            // Rendering wave label
            this.waveLabel.update();
            this.wavesTextLabel.update();
            // Set show status for pause label
            if (!this.pauseLabel.show) this.pauseLabel.show = true;
            // Set show status for game overs
            if (!this.gameOverLabel.show) this.gameOverLabel.show = true;
            if (!this.restartLabel.show) this.restartLabel.show = true;



            // Draw, update state player object and check coliisions
            if (!this.player.hide) {
                if (this.inputController.action == 'left') {
                    // Move left
                    this.player.moveLeft();
                } else if (this.inputController.action == 'right') {
                    // Move right
                    this.player.moveRight();
                } else {
                    // Idle state
                    this.player.update();
                }
            } else {
                if (this.rebornReady) {
                    if (this.livesCount) {
                        this.playerRebornTimer = setTimeout(() => { this.player.hide = false }, 5000);
                        this.player.setPosition(new Vector2d(185, 560));
                        this.rebornReady = false;
                    } else {
                        // Activate game over state
                        this.gameOverTimer = setTimeout(() => { this._gameOver() }, 2000);
                    }
                }
            }

            // Clear reborn player timer
            if (!this.player.hide && this.playerRebornTimer != undefined) {
                clearTimeout(this.playerRebornTimer);
                this.playerRebornTimer = undefined;
            }

            // Fire player bullet
            if (this.inputController.fire) {
                if (this.bullet.ready && !this.player.hide) {
                    // Set bullet position near player
                    this.bullet.setPosition(new Vector2d(this.player.position.x + 14, this.player.position.y - 5));
                    // Play sound
                    this.soundContoller.play(this.allSounds.fire, 0.9);
                }
            }

            // Rendering move bullet
            this.bullet.update();

            // Rendering enemy rockets
            this.rockets.forEach(rocket => {
                rocket.update();
            });

            // Rendering enemy explode
            this.enemyExplode.update();

            // Rendering player explode
            this.playerExplode.update();



            // Calc hidden (a.k. killed) purple enemies (for generate attack)
            let killedPurpleEnemies = this.enemies.filter((en) => {
                if (en instanceof PurpleEnemy && en.hide) return true;
            });
            let maxPurpleEnemies = SETTINGS.purpleEnemies.count * SETTINGS.purpleEnemies.divisions;
            // Calc killed blue enemies
            let killedBlueEnemies = this.enemies.filter((en) => {
                if (en instanceof BlueEnemy && en.hide) return true;
            });
            let maxBlueEnemies = SETTINGS.blueEnemies.count * SETTINGS.blueEnemies.divisions;

            // Attacking if player is active and visible
            if (!this.player.hide) {
                // Prepare attack for general enemy            
                if (this.generalEnemyTimer % 1000 == 0) this.generalReady = true;

                // Geerate type attack and run attack enemies
                if (this.generalReady && !this.attackingEnemies.length && this.attackTimer == undefined) {
                    // Start general attack
                    this.generalEnemyTimer = 0;
                    this.generalReady = false;

                    clearTimeout(this.attackTimer);
                    this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'general') }, 1000);
                } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedPurpleEnemies.length && killedPurpleEnemies.length != maxPurpleEnemies) {
                    // Start attack a purple enemy
                    if (killedBlueEnemies.length == maxBlueEnemies) {
                        // All blue enemies was killed, attack single purple
                        clearTimeout(this.attackTimer);
                        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'single-purple') }, 1000);
                    } else if (killedBlueEnemies.length == (maxBlueEnemies - 1)) {
                        // Attack purple enemy with single blue
                        clearTimeout(this.attackTimer);
                        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'single-blue-single-purple') }, 1000);
                    } else {
                        // Attack single purple enemy with couple blue enemies
                        clearTimeout(this.attackTimer);
                        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'double-blue-single-purple') }, 1000);
                    }
                } else if (!this.attackingEnemies.length && this.attackTimer == undefined && killedBlueEnemies.length != maxBlueEnemies) {
                    if (killedBlueEnemies.length <= 5 || killedBlueEnemies.length == (maxBlueEnemies - 1)) {
                        // Если атакующих нет и таймер пуст - заного запускаем атаку
                        clearTimeout(this.attackTimer);
                        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'single-blue') }, 1000);
                    } else if (killedBlueEnemies.length > 5) {
                        // Start attack with couple blue enemies
                        clearTimeout(this.attackTimer);
                        this.attackTimer = setTimeout(() => { this._genAttack(this.enemies, 'double-blue') }, 1000);
                    }
                }
            }

            // Draw and update state enemies  and check collisions
            this.enemies.forEach(enemy => {
                enemy.update();
                // Rendering enemy all rockets
                enemy.rockets.forEach(r => {
                    r.update();
                    // Detect rocket collision with player
                    this._playerCollision(r);
                })
                // Detect enemy collisions    
                this._enemyCollision(enemy);
            });

            // Attacking enemies behavior 
            this.attackingEnemies.forEach(enemy => {
                if (!enemy.attack) {
                    // Remove from attack array
                    this.attackingEnemies.splice(this.attackingEnemies.indexOf(enemy), 1);
                    if (this.enemies.indexOf(enemy) != -1) {
                        // Remove attack enemy from enemies
                        this.enemies.splice(this.enemies.indexOf(enemy), 1);
                    }
                    // If enemy arrived in last waypoint and still visible (not shooted) will show his prototype clone
                    if (!enemy.hide) {
                        let clone = enemy.proto;
                        clone.hide = false;
                    }
                }

                // Detect attack enemy collisions                
                this._enemyCollision(enemy);
                // Detect collisions with attacking enemy
                this._playerCollision(enemy);

                // Enemy fire control (use shots counter)
                if (enemy.objective > 0 && enemy.objective <= enemy.shots) {
                    if (enemy.proto.rockets[enemy.objective].ready) {
                        // Start rockets on proto attacking enemy
                        enemy.proto.rockets[enemy.objective].setPosition(new Vector2d(
                            enemy.position.x + 10, enemy.position.y + 25
                        ));
                        // play enemy rocket sound
                        this.soundContoller.play(this.allSounds.enemyFire, 0.1);
                    }
                }
            });

            // Generate new wave if you great shooter )
            if (this.killed == this.maxEnemies && this.livesCount) {
                this.disablePause = true;
                setTimeout(() => { this._genNewWave() }, 3000);
                // See ready label bottom
                this.readyLabel.update();
            }
        } else if (this.gameOver) {
            // Gameover state

            // Clear canvas
            this.context.clearRect(0, 0, this.canvas.wave, this.canvas.height);

            // Render background
            this.background.update();
            // Render game over objects
            this.gameOverLabel.update();
            this.restartLabel.update();
            // Render leaderboard
            this.leaderBoard.forEach(l => {
                l.update();
            })
            // Render your result (score + waves)
            this.userScoreText.update();

            // // Restart input detect
            if (this.inputController.restartReady) {
                // Dextroy scene
                this._destroy();
                // Build new scene
                this._build();
            }
        } else if (this.onPause && !this.disablePause) {
            // Pause state

            // Set pause status
            this.onPause = this.inputController.pause;


            // Rendering pause label
            if (this.pauseLabel.show) {
                this.pauseLabel.update();
                this.pauseLabel.show = false;
            }

            // Continue calc time if game on pause

            clearTimeout(this.attackTimer);
            this.attackTimer = undefined;
        }
        this.updateRequest = window.requestAnimationFrame(this._update.bind(this));
    }

    // Start game loop
    start() {
        // Build game
        this._build();

        // Start game loop
        this._update();
    }
}

export default Game;