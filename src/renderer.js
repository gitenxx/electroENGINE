function handleText() {
    console.log('handleText() function was called.')
}

document.getElementById('clickableText').addEventListener('click', () => {
    handleText()
})
