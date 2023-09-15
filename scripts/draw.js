const DRAW_VIEW_HEIGHT = 600;
const DRAW_VIEW_WIDTH = 600;


function createGrid(numRows) {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.setAttribute('style', `height: ${DRAW_VIEW_HEIGHT}px; width: ${DRAW_VIEW_WIDTH}px`);
    for (let i = 0; i < numRows * numRows; i++) {
        let gridCell = document.createElement('div');
        gridCell.style.height = `${DRAW_VIEW_HEIGHT / numRows}px`;
        gridCell.style.width = `${DRAW_VIEW_WIDTH / numRows}px`;
        gridCell.style.background = 'pink';
        gridCell.style.outline = '1px solid grey';
        gridCell.style.display = 'inline-block';
        gridContainer.appendChild(gridCell);
    }
}

createGrid(3);