const board = document.querySelector('#board'),
      colors = ['#5bc489', '#3fb78d', '#23aa8f', '#009c8f', '#008d8c', '#007f86', '#0b717e', '#1c6373'],
      SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 20px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 20px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    
    return colors[index];
}