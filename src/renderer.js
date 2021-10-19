var fs = require('fs');

var lines; 

fs.readFile(`${__dirname}/content/script/scene1.txt`, 'utf8', function (err, data) {
  lines = generateSequence(data.split(/\r?\n/));
  if (err) return console.log(err);
});

function handleText() {
  console.log(lines.next());
  document.getElementById('clickableText').value = lines.next().value;
};

window.onload = function() {
    document.getElementById('clickableText').addEventListener('click', () => {handleText()}); 
};

function* generateSequence(seq) {
  yield* seq;
}
