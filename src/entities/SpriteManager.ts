const SPRITES_PATH = 'content/sprites/';

enum SpritePosition {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export class SpriteManager {
    container: HTMLElement | null;

    constructor(engineContext: EngineContext) {
        this.container = document.getElementById('spriteBlock');
    }

    setSprite(spriteName: string) {
        if (!this.container) return;
        this.clear();

        this.addSprite(spriteName, SpritePosition.CENTER)
    }

    setTwoSprites(spriteName1: string, spriteName2: string) {
        if (!this.container) return;
        this.clear();

        this.addSprite(spriteName1, SpritePosition.LEFT)
        this.addSprite(spriteName2, SpritePosition.RIGHT)
    }

    createSpriteElement(spriteName: string, spritePosition: SpritePosition) {
        const spriteImg = document.createElement('img');
        spriteImg.src = `./${SPRITES_PATH}${spriteName}`
        spriteImg.classList.add('sprite')
        spriteImg.classList.add(spritePosition)

        return spriteImg
    }

    addSprite(spriteName: string, spritePosition: SpritePosition) {
        const spriteElement = this.createSpriteElement(spriteName, spritePosition);
        this.container.appendChild(spriteElement);
    }

    clear() {
        if (!this.container) return;
        this.container.innerHTML = '';
    }
}
