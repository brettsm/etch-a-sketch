const DRAW_VIEW_HEIGHT = 600;
const DRAW_VIEW_WIDTH = 600;
let isMouseDown = false;
let gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style', `height: ${DRAW_VIEW_HEIGHT}px; width: ${DRAW_VIEW_WIDTH}px`);

let isRedSelected = false;
let isOrangeSelected = false;
let isYellowSelected = false;
let isGreenSelected = false;
let isBlueSelected = false;
let isPinkSelected = false;
let isPurpleSelected = false;
let isRandomSelected = false;

let mostRecentSelection = 'black'; //default is black

function createColorGrid(numRows) {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < numRows * numRows; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.style.height = `${DRAW_VIEW_HEIGHT / numRows}px`;
        gridCell.style.width = `${DRAW_VIEW_WIDTH / numRows}px`;
        gridCell.style.outline = '1px solid grey';
        gridCell.style.display = 'inline-block';

        gridCell.addEventListener('mousedown', function() {
            isMouseDown = true;
            if(mostRecentSelection === 'random') {
                let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                gridCell.style.backgroundColor = randomColor;
            } else if(mostRecentSelection === 'black') {
                let thisColor = '#000000';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'red') {
                let thisColor = '#cc0000';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'orange') {
                let thisColor = '#ffa500';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'yellow') {
                let thisColor = '#ffff00';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'blue') {
                let thisColor = '#0000ff';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'pink') {
                let thisColor = '#FFC0CB';
                gridCell.style.backgroundColor = thisColor
            } else if(mostRecentSelection === 'purple') {
                let thisColor = '#800080';
                gridCell.style.backgroundColor = thisColor
            } else { //green
                let thisColor = '#008000';
                gridCell.style.backgroundColor = thisColor
            }
        });
        gridCell.addEventListener('mouseover', () => {
            if(isMouseDown) {
                if(mostRecentSelection === 'random') {
                    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    gridCell.style.backgroundColor = randomColor;
                } else if(mostRecentSelection === 'black') {
                    let thisColor = '#000000';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'red') {
                    let thisColor = '#cc0000';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'orange') {
                    let thisColor = '#ffa500';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'yellow') {
                    let thisColor = '#ffff00';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'blue') {
                    let thisColor = '#0000ff';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'pink') {
                    let thisColor = '#FFC0CB';
                    gridCell.style.backgroundColor = thisColor
                } else if(mostRecentSelection === 'purple') {
                    let thisColor = '#800080';
                    gridCell.style.backgroundColor = thisColor
                } else { //green
                    let thisColor = '#008000';
                    gridCell.style.backgroundColor = thisColor
                }
            }
        });
        gridCell.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        gridContainer.appendChild(gridCell);
    }
}

let threeGridButton = document.getElementById('three-grid');
threeGridButton.addEventListener('click', () => {
    createColorGrid(3);
});

let fiveGridButton = document.getElementById('five-grid');
fiveGridButton.addEventListener('click', () => {
    createColorGrid(5);
})

let sixGridButton = document.getElementById('six-grid');
sixGridButton.addEventListener('click', () => {
    createColorGrid(6);
})

let tenGridButton = document.getElementById('ten-grid');
tenGridButton.addEventListener('click', () => {
    createColorGrid(10);
});

let twentyGridButton = document.getElementById('twenty-grid');
twentyGridButton.addEventListener('click', () => {
    createColorGrid(20);
});

let blackButton = document.getElementById('black-color');
blackButton.addEventListener('click', () => {
    mostRecentSelection = 'black';
});

let redButton = document.getElementById('red-color');
redButton.addEventListener('click', () => {
    mostRecentSelection = 'red';
});

let orangeButton = document.getElementById('orange-color');
orangeButton.addEventListener('click', () => {
    mostRecentSelection = 'orange';
});

let yellowButton = document.getElementById('yellow-color');
yellowButton.addEventListener('click', () => {
    mostRecentSelection = 'yellow';
});

let greenButton = document.getElementById('green-color');
greenButton.addEventListener('click', () => {
    mostRecentSelection = 'green';
});

let blueButton = document.getElementById('blue-color');
blueButton.addEventListener('click', () => {
    mostRecentSelection = 'blue';
});

let pinkButton = document.getElementById('pink-color');
pinkButton.addEventListener('click', () => {
    mostRecentSelection = 'pink';
});

let purpleButton = document.getElementById('purple-color');
purpleButton.addEventListener('click', () => {
    mostRecentSelection = 'purple';
});

let randomButton = document.getElementById('random-color');
randomButton.addEventListener('click', () => {
    mostRecentSelection = 'random';
});