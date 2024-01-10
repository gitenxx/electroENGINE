export class DialogManager {
    charNameElement: HTMLElement | null;
    speechElement: HTMLElement | null;

    constructor() {
        this.charNameElement = document.getElementById('charName');
        this.speechElement = document.getElementById('speech');
    }

    setCharName(charName: string) {
        this.charNameElement.innerHTML = charName;
    }

    setSpeech(speech: string) {
        this.speechElement.innerHTML = speech;
    }
}
