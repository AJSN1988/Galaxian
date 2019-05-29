// Settings for game objects and enteties
import p_sprite from '../img/player.png';
import blue_sheet from '../img/b_sheet_80_20.png';
import purple_sheet from '../img/p_sheet_80_20.png';
import red_sheet from '../img/r_sheet_80_20.png';
import general_sheet from '../img/g_sheet_80_20.png';
import enemy_exp from '../img/e_exp_sheet.png';
import player_exp from '../img/player_explode_big.png';
import player_live from '../img/live.png';
import w_sprite from '../img/wave_sprite.png';

// Sprites
let player = new Image(30, 30);
player.src = p_sprite;
let b_sheet = new Image();
b_sheet.src = blue_sheet;
let p_sheet = new Image();
p_sheet.src = purple_sheet;
let r_sheet = new Image();
r_sheet.src = red_sheet;
let g_sheet = new Image();
g_sheet.src = general_sheet;
let en_exp = new Image();
en_exp.src = enemy_exp;
let pl_exp = new Image();
pl_exp.src = player_exp
let pl_live = new Image(15, 15);
pl_live.src = player_live;
let en_wave = new Image(20, 20);
en_wave.src = w_sprite;


const SETTINGS = {
    // Input settings
    input: {
        keyboard: {
            actions: {
                // Keycodes on actions
                '37': 'left',
                '39': 'right',
                '38': 'fire',
                '27': 'pause',
                '32': 'restart'
            }
        }
    },
    // GUI settings
    gui: {
        background: {
            sprite: 'black'
        },
        live: {
            sprite: pl_live,
            width: 15,
            height: 15
        },
        wave: {
            sprite: en_wave,
            width: 15,
            height: 15
        }
    },
    // Sound settings
    audio: {
        sounds: {
            fire: './audio/rocket_fire.mp3',
            enemyExplode: './audio/en_explode_1.wav',
            enemyFire: './audio/en_fire.mp3',
            playerExplode: './audio/player_explode.wav'
        }
    },
    // Setting for game scene
    scene: {
        font: 'Pixellari',
        nextLive: 5000,
        text: {
            score: {
                width: '150',
                color: 'red'
            },
            highScore: {
                width: '150',
                color: 'purple'
            },
            wave: {
                width: '50',
                color: 'red'
            },
            pause: {
                width: '50',
                color: 'red'
            }
        },
        leaderboard: [
            { user: 'LEHA', score: 5000 },
            { user: 'USER1', score: 4000 },
            { user: 'USER2', score: 3000 },
            { user: 'USER3', score: 2000 },
            { user: 'USER4', score: 1000 },
            { user: 'USER5', score: 750 },
            { user: 'USER6', score: 500 },
            { user: 'USER7', score: 250 },
            { user: 'USER8', score: 100 },
            { user: 'USER9', score: 0 }
        ],
        background: {
            sprite: 'black',
            size: {
                width: 400,
                height: 600
            }
        },
        player: {
            position: {
                x: 185,
                y: 520
            },
            lives: 3,
            maxLives: 5
        },
        enemySpacing: 10,
        blueEnemies: {
            count: 10,
            divisions: 3,
            position: {
                x: 55,
                y: 160,
                spacing: 10,
                width: 30
            },
            speed: 1
        },
        purpleEnemies: {
            count: 8,
            divisions: 1,
            position: {
                x: 85,
                y: 130,
                spacing: 10,
                width: 30
            }
        },
        redEnemies: {
            count: 6,
            divisions: 1,
            position: {
                x: 115,
                y: 100,
                spacing: 10,
                width: 30
            }
        },
        generalEnemies: {
            count: 2,
            divisions: 1,
            position: {
                x: 145,
                y: 75,
                spacing: 60,
                width: 30
            }
        }
    },
    // Player object settings
    player: {
        width: 30,
        height: 30,
        speed: 2,
        reloadTime: 1000,
        limit: {
            left: 0,
            right: 370
        },
        limitsX: {
            left: 0,
            right: 370
        },
        sprite: player
    },
    // Blue enemy object settings
    blueEnemy: {
        width: 20,
        height: 20,
        speed: 1,
        speedAttack: 3,
        shots: 2,
        limitsX: {
            left: 30,
            right: 50
        },
        sprite: b_sheet,
        cost: 30
    },
    // Purple enemy object settings
    purpleEnemy: {
        width: 20,
        height: 20,
        speed: 1,
        speedAttack: 3.5,
        shots: 3,
        limitsX: {
            left: 30,
            right: 50
        },
        sprite: p_sheet,
        cost: 40
    },
    // Red enemy object settings
    redEnemy: {
        width: 20,
        height: 20,
        speed: 1,
        speedAttack: 3,
        shots: 2,
        limitsX: {
            left: 30,
            right: 50
        },
        sprite: r_sheet,
        cost: 50
    },
    // General enemy object settings
    generalEnemy: {
        width: 20,
        height: 30,
        speed: 1,
        speedAttack: 3,
        shots: 4,
        limitsX: {
            left: 30,
            right: 50
        },
        sprite: g_sheet,
        cost: 60
    },
    // Bullet object
    bullet: {
        width: 2,
        height: 10,
        speed: 5,
        limitsY: {
            top: -20,
            bottom: 600
        },
        sprite: 'orange'
    },
    // Enemy rocek pbject
    rocket: {
        width: 2,
        height: 7,
        speed: 4,
        limitsY: {
            top: 0,
            bottom: 700
        },
        sprite: 'white'
    },
    // Enemy explode object
    enemyExplode: {
        size: {
            width: 20,
            height: 20
        },
        sprite: en_exp,
        frames: 4
    },
    // Player explode
    playerExplode: {
        size: {
            width: 50,
            height: 50
        },
        sprite: pl_exp,
        frames: 4
    }
}

// Export settings
export default SETTINGS;