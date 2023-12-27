import { Renderer } from 'electron';
import { readFile } from "fs";

export = Renderer;

let lines: Generator<string, void, undefined>;

window.onload = function () {
  readFile(`${__dirname}/content/script/scene1.txt`, 'utf8', function (err: NodeJS.ErrnoException, data: string) {
    lines = generateSequence(data.split(/\r?\n/));
    if (err) return console.log(err);
  });

  document.getElementById('clickableText').addEventListener('click', () => { 
    handleText(); 
  });
};

function checkStringForMarkdown(CurrentString:string){
  var r = /^#/;
  return r.test(CurrentString)
};

function handleText() {
  const text: IteratorResult<string, void> = lines.next();
  if (checkStringForMarkdown(text.value as string)){
    console.log('suka name')
    console.log(text)
    if (!text.done) (document.getElementById('charName') as HTMLInputElement).innerHTML = text.value.replace(/#+/, '');
    (document.getElementById('clickableText') as HTMLInputElement).value = lines.next().value as string;
  } else {
    console.log(text)
    if (!text.done) (document.getElementById('clickableText') as HTMLInputElement).value = text.value as string;
  }
};

function* generateSequence(seq: string[]): Generator<string, void, undefined> {
  yield* seq;
}
