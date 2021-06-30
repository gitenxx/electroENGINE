function handleText() {
    console.log('handleText() function was called. Here will be some logic later.');
};

window.onload = function() {
    document.getElementById('clickableText').addEventListener('click', () => {handleText()}); 
};

var fs = require('fs');

fs.readFile('/Users/void_himmel/electroengine/src/content/script/scene1.txt', 'utf8', function (err, data) {
  const lines = data.split(/\r?\n/);
   lines.forEach((line) => {
        console.log(line);
    });
  if (err) return console.log(err);
});