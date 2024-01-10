const BACKGROUND_PATH = 'content/backgrounds/';

export class BackgroundManager {
    container: HTMLElement | null;

    constructor() {
        this.container = document.getElementById('backgroundBlock');
    }

    setBackground(background: string) {
        this.container.style.backgroundImage = `url(../src/${BACKGROUND_PATH}${background})`
    }
}
