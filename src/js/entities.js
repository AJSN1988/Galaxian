// Game enteties

import Settings from './settings';
import Vector2d from './vector';

const PLAYER_SETTINGS = Settings.player;
const BULLET_SETTINGS = Settings.bullet;
const ROCKET_SETTINGS = Settings.rocket;
const BLUE_ENEMY_SETTINGS = Settings.blueEnemy;
const PURPLE_ENEMY_SETTINGS = Settings.purpleEnemy;
const RED_ENEMY_SETTINGS = Settings.redEnemy;
const GENERAL_ENEMY_SETTINGS = Settings.generalEnemy;
const ENEMY_EXPLODE = Settings.enemyExplode;
const PLAYER_EXPLODE = Settings.playerExplode;

class Bullet {
    // Class for bullet object
    constructor(context, position) {
        this.position = position;
        this.context = context;
        this.speed = BULLET_SETTINGS.speed;
        this.size = {
            width: BULLET_SETTINGS.width,
            height: BULLET_SETTINGS.height
        }

        this.topLimit = BULLET_SETTINGS.limitsY.top;
        this.bottomLimit = BULLET_SETTINGS.limitsY.bottom;
        this.sprite = BULLET_SETTINGS.sprite;
        this.stop = false; // Detect stop bullet moving
        this.ready = true; // Detect ready bullet stste if she moving - not ready
    }
    update() {
        // If bullet is hide not update this
        if (!this.stop) {
            this.ready = false;
            this.position.y = this.position.y - this.speed;
            if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
                // Stop bullet if arrived limit
                this.stop = true;
                // Set ready status
                this.ready = true;
            }
            // Add detect collisions below
        }
        this._draw(this.context);
    }

    _draw(context) {
        context.fillStyle = this.sprite;
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

    }

    setPosition(position) {
        this.position = position;
        this.stop = false;
        this.ready = true;
    }

    collision(opponent) {
        // Detect collision with another object (using his rect prop)
        let r = this._getRect();
        let opp = opponent._getRect();

        return r.right >= opp.left && r.left <= opp.right &&
            r.top <= opp.bottom && r.bottom >= opp.top;
    }

    _getRect() {
        return {
            top: this.position.y,
            right: this.position.x + this.size.width,
            bottom: this.position.y + this.size.height,
            left: this.position.x
        }
    }
}

class Rocket extends Bullet {
    // Class for enemy rockets
    constructor(context, position) {
        super(context, position);
        super.position = position;
        super.context = context;
        super.speed = ROCKET_SETTINGS.speed;
        super.size = {
            width: ROCKET_SETTINGS.width,
            height: ROCKET_SETTINGS.height
        }
        super.topLimit = ROCKET_SETTINGS.limitsY.top;
        super.bottomLimit = ROCKET_SETTINGS.limitsY.bottom;
        super.sprite = ROCKET_SETTINGS.sprite;
    }
    update() {
        // If bullet is hide not update this
        if (!this.stop) {
            this.ready = false;
            this.position.y = this.position.y + this.speed;
            if (this.position.y >= this.bottomLimit || this.position.y + this.size.width <= this.topLimit) {
                // Stop bullet if arrived limit
                this.stop = true;
                // Set ready status
                this.ready = true;
            }
        }
        this._draw(this.context);
    }
}


class Unit {
    // Base units class    
    constructor(context, position) {
        this.context = context;
        this.sprite;
        this.limit = { x: 0.5, y: 0.5 };
        this.size = {
            width: 0,
            height: 0
        };
        this.position = position;
        this.waypoints = [];
        this.objective = 0;
        this.speed;

        this.speedAttack;
        this.shots;
        this.rockets = [];
        for (let i = 0; i < 5; i++) {
            this.rockets.push(new Rocket(this.context, new Vector2d(-100, -100)));
        }
        this.attack = false;
        this.hide = false;

        this.frameRate = 0;
        this.frameLimit = 60;

        this.direction = 'none';
        this.cost = 0;
    }

    update() {
        if (!this.waypoints.length) {
            return false;
        }
        // Change direction 
        if (this.attack && this.position.x < this.waypoints[this.objective].x) {
            this.direction = 'right';

        } else if (this.attack && this.position.x > this.waypoints[this.objective].x) {
            this.direction = 'left';
        }

        let speed = this.speed;
        let distance = this.position.substract(this.waypoints[this.objective]);
        let distanceNorm = distance.normalize();

        if (this.attack) {
            speed = this.speed * this.speedAttack;
        } else {
            speed = this.speed;
        }

        this.position = this.position.add(distanceNorm.multiply(speed));

        if (distance.getMagnitude() - speed <= 0) {
            this.position = this.waypoints[this.objective];
            if (this.objective < this.waypoints.length - 1) {
                this.objective++
            } else if (this.attack && this.objective == this.waypoints.length - 1) {
                // Last waypoint in attack
                this.attack = false;
                this._setPosition(new Vector2d(-100, -100));
                this.waypoints = [];
            } else {
                this.objective = 0
            }
            // Change unit speed if he unvisible on game canvas
            if (this.attack && this.objective > this.waypoints.length - 4) {
                speed += this.speed + this.speedAttack * 1000;
            } else if (this.attack && this.objective == this.waypoints.length - 1) {
                speed += this.speed + this.speedAttack;
            }
        }
        this._draw();
    }

    collision(opponent) {
        // Detect collision with another object (using his rect prop)
        let r = this._getRect();
        let opp = opponent._getRect();

        return r.right >= opp.left && r.left <= opp.right &&
            r.top <= opp.bottom && r.bottom >= opp.top;
    }

    setWaypoints(waypoints) {
        if (Array.isArray(waypoints)) {
            this.waypoints = waypoints;
        } else {
            this.waypoints = [];
            let ways = [];
            if (waypoints instanceof Vector2d) {
                [].forEach.call(arguments, function (arg) {
                    ways.push(arg);
                });
            }
            this.waypoints = ways;
        }
    }

    kill() {
        this.hide = true;
        this._setPosition(new Vector2d(1000, 1000));
        this.waypoints = [];
        this.attack = false;
    }

    _draw() {
        if (this.hide) {
            this.context.fillStyle = 'rgba(0, 0, 0, 0)';
            this.context.save();
            this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height));
            this.context.fillRect(this.position.x, this.position.y, 20, 20);
            this.context.restore();
        } else {
            this.context.save();
            this.context.translate(-1 * (this.limit.x * this.size.width), -1 * (this.limit.y * this.size.height));

            if (this.direction == 'none') {
                // Sprite animation from sprite sheet (for idle use only 2 first frames)
                if (this.frameRate < this.frameLimit) {
                    this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
                    this.frameRate++;
                } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2) {
                    this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
                    this.frameRate++;
                } else {
                    this.context.drawImage(this.sprite, 20, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
                    this.frameRate = 0;
                }
            } else if (this.direction == 'right') {
                this.context.drawImage(this.sprite, 40, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            } else if (this.direction == 'left') {
                this.context.drawImage(this.sprite, 60, 0, this.size.width, this.size.height, this.position.x, this.position.y, 20, 20);
            }
            this.context.restore();
        }

    }

    _setPosition(position) {
        this.position = position;
    }

    setPosition(position) {
        this._setPosition(position);
    }

    _getRect() {
        return {
            top: this.position.y,
            right: this.position.x + this.size.width,
            bottom: this.position.y + this.size.height,
            left: this.position.x
        }
    }
}

class BlueEnemy extends Unit {
    // Blue enemy class
    constructor(context, position) {
        super(context, position);
        super.sprite = BLUE_ENEMY_SETTINGS.sprite;
        super.position = position;
        super.context = context;
        super.size = {
            width: BLUE_ENEMY_SETTINGS.width,
            height: BLUE_ENEMY_SETTINGS.height
        }
        super.speed = BLUE_ENEMY_SETTINGS.speed;
        super.speedAttack = BLUE_ENEMY_SETTINGS.speedAttack;
        super.shots = BLUE_ENEMY_SETTINGS.shots;
        super.cost = BLUE_ENEMY_SETTINGS.cost;
    }
}

class PurpleEnemy extends Unit {
    // Purple enemy class
    constructor(context, position) {
        super(context, position);
        super.sprite = PURPLE_ENEMY_SETTINGS.sprite;
        super.position = position;
        super.context = context;
        super.size = {
            width: PURPLE_ENEMY_SETTINGS.width,
            height: PURPLE_ENEMY_SETTINGS.height
        }
        super.speed = PURPLE_ENEMY_SETTINGS.speed;
        super.speedAttack = PURPLE_ENEMY_SETTINGS.speedAttack;
        super.shots = PURPLE_ENEMY_SETTINGS.shots;
        super.cost = PURPLE_ENEMY_SETTINGS.cost;
    }
}

class RedEnemy extends Unit {
    // Red enemy class
    constructor(context, position) {
        super(context, position);
        super.sprite = RED_ENEMY_SETTINGS.sprite;
        super.position = position;
        super.context = context;
        super.size = {
            width: RED_ENEMY_SETTINGS.width,
            height: RED_ENEMY_SETTINGS.height
        }
        super.speed = RED_ENEMY_SETTINGS.speed;
        super.speedAttack = RED_ENEMY_SETTINGS.speedAttack;
        super.shots = RED_ENEMY_SETTINGS.shots;

        this.general;
        super.cost = RED_ENEMY_SETTINGS.cost;
    }
}

class GeneralEnemy extends Unit {
    // General enemy class
    constructor(context, position) {
        super(context, position);
        super.sprite = GENERAL_ENEMY_SETTINGS.sprite;
        super.position = position;
        super.context = context;
        super.size = {
            width: GENERAL_ENEMY_SETTINGS.width,
            height: GENERAL_ENEMY_SETTINGS.height
        }
        super.speed = GENERAL_ENEMY_SETTINGS.speed;
        super.speedAttack = GENERAL_ENEMY_SETTINGS.speedAttack;
        super.shots = GENERAL_ENEMY_SETTINGS.shots;
        super.cost = GENERAL_ENEMY_SETTINGS.cost;
    }
}

class Player extends Unit {
    // Player unit class
    constructor(context, position) {
        super(context, position);
        super.sprite = PLAYER_SETTINGS.sprite;
        super.limit = PLAYER_SETTINGS.limit;
        super.size = {
            width: PLAYER_SETTINGS.width,
            height: PLAYER_SETTINGS.height
        };
        super.position = position;
        super.speed = PLAYER_SETTINGS.speed;
    }

    update(direction) {
        if (direction == 'left') {
            if (this.position.x >= this.limit.left) {
                this.position.x = this.position.x - this.speed;
            }
        } else if (direction == 'right') {
            if (this.position.x <= this.limit.right) {
                this.position.x = this.position.x + this.speed;
            }
        }
        this._draw(this.context);
    }

    moveLeft() {
        this.update('left');
    }

    moveRight() {
        this.update('right');
    }

    _draw(context) {
        if (this.hide) {
            this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        } else {
            context.drawImage(this.sprite, this.position.x, this.position.y, this.size.width, this.size.height);
        }
    }

    setPosition(position) {
        super._setPosition(position);
    }
}

class Explode {
    // Base class for explode
    constructor(context, position, limit) {
        this.position = position;
        this.context = context;
        this.size = {
            width: 0,
            height: 0
        };
        this.sprite;
        this.frameRate = 0;
        this.originLimit = limit
        this.frameLimit = this.originLimit;
        this.frame = 0; // First frame
        this.frames = 4; // Animation steps
        this.hide = true;
        this.maxFrameRate = this.frameLimit * this.frames;

    }

    update() {
        this._draw();
    }

    _draw() {
        if (this.hide) {
            this.context.fillStyle = 'rgba(0, 0, 0, 0)';
            this.context.save();
            this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            this.context.restore();
            this.frame = 0;
            this.frameLimit = this.originLimit;
        } else {
            this.context.save();
            // Sprite animation from sprite sheet (for idle use only 2 first frames)
            if (this.frameRate < this.frameLimit) {
                this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
                this.frameRate++;
            } else if (this.frameRate >= this.frameLimit && this.frameRate <= this.frameLimit * 2 && this.frameRate <= this.maxFrameRate) {
                this.frame++;
                this.frameLimit *= 2;
                this.context.drawImage(this.sprite, this.size.width * this.frame, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
                this.frameRate++;
            } else {
                this.frameRate = 0;
                this.frame = 0;
                this.hide = true;
            }
            this.context.restore();
        }

    }
    setPosition(position) {
        this.position = position;
    }
}

class EnemyExplode extends Explode {
    constructor(context, position, limit) {
        super(context, position, limit);
        super.size = {
            width: ENEMY_EXPLODE.size.width,
            height: ENEMY_EXPLODE.size.height
        },
            super.sprite = ENEMY_EXPLODE.sprite;
        super.frames = ENEMY_EXPLODE.frames;
    }
}

class PlayerExplode extends Explode {
    constructor(context, position, limit) {
        super(context, position, limit);
        super.size = {
            width: PLAYER_EXPLODE.size.width,
            height: PLAYER_EXPLODE.size.height
        },
            super.sprite = PLAYER_EXPLODE.sprite;
        super.frames = PLAYER_EXPLODE.frames;
    }
}

// Exporting enteties
export {
    Player, BlueEnemy, PurpleEnemy, RedEnemy, GeneralEnemy, Bullet, Unit, Rocket, EnemyExplode, PlayerExplode
};