import { Renderer } from 'electron';

import { NovelEngine } from "./entities/NovelEngine";

export = Renderer;

const novelEngine = new NovelEngine();

novelEngine.selectScript('test.txt')
    .then(() => {
        novelEngine.run();
    })


const textBlock = document.getElementById('textBlock')
if (textBlock) {
    textBlock.addEventListener('click', () => {
        novelEngine.run();
    })
}



