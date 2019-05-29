import Settings from './settings';

const SETTINGS = Settings.audio;

class AudioController {
    // Audio manager
    constructor() {
        this.sounds = SETTINGS.sounds;
    }

    play(sound, volume) {
        let p = new Audio(sound);
        p.play();
        p.volume = volume;
    }
}

export default AudioController;