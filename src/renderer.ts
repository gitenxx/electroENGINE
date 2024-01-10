import { Renderer } from 'electron';

import { NovelEngine } from "./entities/NovelEngine";

export = Renderer;

const novelEngine = new NovelEngine();

novelEngine.selectScript('test.txt')


const textBlock = document.getElementById('textBlock')
if (textBlock) {
    textBlock.addEventListener('click', () => {
        console.log(1);
        novelEngine.run();
    })
}



