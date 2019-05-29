import Settings from './settings';
import Vector2d from './vector';

const SETTINGS = Settings.gui;
const SCENE = Settings.scene;

class Text {
    // Class for a text labels
    constructor(context, position, text, color, width, height) {
        this.position = position;
        this.context = context;
        this.text = text;
        this.width = width;
        this.color = color;
        this.height = height;
        this.show = true;
    }

    update() {
        this._draw();
    }

    setText(text) {
        this.text = text;
    }

    _draw() {
        this.context.textAlign = 'start';
        this.context.fillStyle = this.color;
        this.context.font = `${this.height}px ${SCENE.font}`;
        this.context.fillText(this.text, this.position.x, this.position.y, this.width);
    }
}

class SpriteLabel {
    // Base class for a sprite based labels
    constructor(context, position) {
        this.context = context;
        this.position = position;
        this.sprite;
        this.size = {
            width: 10,
            height: 10
        };
        this.hide = false;
    }

    update() {
        if (!this.hide) this._draw();
    }

    _draw() {
        this.context.save();
        this.context.drawImage(this.sprite, 0, 0, this.size.width, this.size.height, this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.restore();
    }
}

class PlayerLive extends SpriteLabel {
    // Plaeyer lives represent object
    constructor(context, position) {
        super(context, position);
        super.context = context;
        super.position = position;
        super.sprite = SETTINGS.live.sprite;
        super.size = {
            width: SETTINGS.live.width,
            height: SETTINGS.live.height
        };
    }
}

class WaveLabel extends SpriteLabel {
    constructor(context, position) {
        super(context, position);
        super.context = context;
        super.position = position;
        super.sprite = SETTINGS.wave.sprite;
        super.size = {
            width: SETTINGS.wave.width,
            height: SETTINGS.wave.height
        };
    }
}

class Star {
    // Class for backgorund star
    constructor(context, position) {
        this.position = position;
        this.context = context;
        this.size = {
            width: 2,
            height: 2
        };
        this.sprite;
        this.hide = false;
        this.speed = 0.8;
        this.limitBottom = SCENE.background.size.height + 10;
    }

    update() {
        if (this.position.y <= this.limitBottom) {
            this.position.y = this.position.y + this.speed;
        } else {
            this.setPosition(new Vector2d(-50, -50));
        }
        this._draw();
    }

    _draw() {
        if (this.hide) {
            this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        } else {
            this.context.fillStyle = this.sprite;
        }
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    setPosition(position) {
        this.position = position;
    }
}

class Background {
    // Background gui class
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.fill = SETTINGS.background.sprite;
        this.stars = this._genStars();
    }

    update() {
        this._draw(this.context);

        // Draw stars and moving emulation )
        this.stars.forEach(star => {
            if (star.position.x == -50) {
                let x = this._getRandom(5, this.canvas.width - 5);
                star.setPosition(new Vector2d(x, -10));
            }
            star.update();
        });
    }

    _draw(context) {
        context.fillStyle = this.fill;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _genStars() {
        // Generate stars
        let stars = [];
        let sprites = ['green', 'red', 'purple', 'white', 'blue'];
        let count = this._getRandom(20, 35);

        for (let i = 0; i < count; i++) {
            let x = this._getRandom(5, this.canvas.width - 5);
            let y = this._getRandom(5, this.canvas.height - 5);
            let s = new Star(this.context, new Vector2d(x, y));
            s.sprite = sprites[this._getRandom(0, sprites.length - 1)];
            stars.push(s);
        }
        return stars;
    }

    _getRandom(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
}

export { Background, Text, PlayerLive, WaveLabel };