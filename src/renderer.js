function handleText() {
    console.log('handleText() function was called. Here will be some logic later.');
};

window.onload = function() {
    document.getElementById('clickableText').addEventListener('click', () => {handleText()}); };
