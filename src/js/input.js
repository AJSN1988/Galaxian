// User input object

import Settings from './settings';

// User input provider class
class InputController {
    constructor(view) {
        this.view = view;
        this.action = 'idle';
        this.fire = false; // Player fire control state BAD
        this.pause = false; // Game pause state BAD
        this.restartReady = false;
    }
    keyDown(e) {
        let keys = Settings.input.keyboard.actions;
        let k = e.which || e.keyCode;

        if (keys[k] !== undefined) {
            e.preventDefault();
            if (keys[k] == 'fire') {
                this.fire = true;
            } else if (keys[k] == 'pause') {
                this.pause === true ? this.pause = false : this.pause = true;
            } else if (keys[k] == 'restart') {
                this.restartReady === true ? this.restartReady = false : this.restartReady = true;
            } else {
                this.action = keys[k];
            }
        }
    }
    keyUp(e) {
        let keys = Settings.input.keyboard.actions;
        var k = e.which || e.keyCode;

        if (keys[k] !== undefined) {
            e.preventDefault();
            if (keys[k] == 'fire') {
                this.fire = false;
            } else {
                this.action = 'idle';
            }
        }
    }
    listen() {
        this.view.addEventListener('keydown', function (e) {
            this.keyDown(e);
        }.bind(this), false);
        this.view.addEventListener('keyup', function (e) {
            this.keyUp(e);
        }.bind(this), false);
    };
}

// Export controller
export default InputController;