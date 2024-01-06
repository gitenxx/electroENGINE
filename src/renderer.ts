import { Renderer } from 'electron';
import { readFile } from "fs";

export = Renderer;

let lines: Generator<string, void, undefined>;

window.onload = function () {
  readFile(`${__dirname}/content/script/scene1.txt`, 'utf8', function (err: NodeJS.ErrnoException, data: string) {
    lines = generateSequence(data.split(/\r?\n/));
    if (err) return console.log(err);
  });

  document.getElementById('textBlock').addEventListener('click', () => { 
    handleText(); 
  });
};

function handleText() {
  const text: IteratorResult<string, void> = lines.next();
  markdownSeeker(text)
}

function markdownSeeker(text: IteratorResult<string, void>) {
  switch (text.value, true) {
    case (text.value[0] == "#"):
      if (!text.done) (document.getElementById('charName') as HTMLInputElement).innerHTML = text.value.replace(/#+/, '');
      (document.getElementById('clickableText') as HTMLInputElement).value = lines.next().value as string;
      break;
    case (text.value[0] == "~"):
      var sprt = ('./content/sprites/' + text.value.replace(/~+/, '')) 
      if (!text.done) (document.getElementById('sprite') as HTMLImageElement).src = sprt;
      markdownSeeker(lines.next());
      break;
    default:
      if (!text.done) (document.getElementById('clickableText') as HTMLInputElement).value = text.value as string;
      break;
  }
}

function* generateSequence(seq: string[]): Generator<string, void, undefined> {
  yield* seq;
}
