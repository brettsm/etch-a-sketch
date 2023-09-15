const DRAW_VIEW_HEIGHT = 600;
const DRAW_VIEW_WIDTH = 600;
let isMouseDown = false;
let gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style', `height: ${DRAW_VIEW_HEIGHT}px; width: ${DRAW_VIEW_WIDTH}px`);

function createRandomColorGrid(numRows) {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < numRows * numRows; i++) {
        let gridCell = document.createElement('div');
        gridCell.style.height = `${DRAW_VIEW_HEIGHT / numRows}px`;
        gridCell.style.width = `${DRAW_VIEW_WIDTH / numRows}px`;
        gridCell.style.outline = '1px solid grey';
        gridCell.style.display = 'inline-block';

        gridCell.addEventListener('mousedown', function() {
            isMouseDown = true;
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            gridCell.style.backgroundColor = randomColor;
        });
        gridCell.addEventListener('mouseover', () => {
            if(isMouseDown) {
                let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                gridCell.style.backgroundColor = randomColor;
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
    createRandomColorGrid(3);
});

let fiveGridButton = document.getElementById('five-grid');
fiveGridButton.addEventListener('click', () => {
    createRandomColorGrid(5);
})

let sixGridButton = document.getElementById('six-grid');
sixGridButton.addEventListener('click', () => {
    createRandomColorGrid(6);
})

let tenGridButton = document.getElementById('ten-grid');
tenGridButton.addEventListener('click', () => {
    createRandomColorGrid(10);
});

let twentyGridButton = document.getElementById('twenty-grid');
twentyGridButton.addEventListener('click', () => {
    createRandomColorGrid(20);
});