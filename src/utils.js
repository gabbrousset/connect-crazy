const createInitialGrid = (colsNum, rowsNum) =>
    Array(colsNum)
        .fill()
        .map(() => Array(rowsNum).fill(0));

const checkForWin = (grid, rowsNum, colsNum, lastRow, lastCol, turn) => {
    const countConsecutive = (changeInRow, changeInColumn) => {
        let count = 0;

        let rowIdx = lastRow + changeInRow;
        let colIdx = lastCol + changeInColumn;

        while (
            rowIdx >= 0 &&
            rowIdx < rowsNum &&
            colIdx >= 0 &&
            colIdx < colsNum &&
            grid[colIdx][rowIdx] === turn
        ) {
            count++;
            rowIdx += changeInRow;
            colIdx += changeInColumn;
        }

        return count;
    };

    // horizontal
    if (countConsecutive(0, -1) + countConsecutive(0, 1) >= 3) {
        return true;
    }

    // vertical
    if (countConsecutive(-1, 0) + countConsecutive(1, 0) >= 3) {
        return true;
    }

    // diagonals
    if (countConsecutive(-1, -1) + countConsecutive(1, 1) >= 3) {
        return true;
    }
    if (countConsecutive(-1, 1) + countConsecutive(1, -1) >= 3) {
        return true;
    }

    return false;
};

// const rotateGrid = (grid, rowsNum, colsNum) => {
//     let newGrid = createInitialGrid(colsNum, rowsNum);

//     for (let rowIdx = 0; rowIdx < rowsNum; rowIdx++) {
//         for (let colIdx = 0; colIdx < colsNum; colIdx++) {
//             newGrid[colIdx][rowsNum - 1 - rowIdx] = grid[rowIdx][colIdx];
//         }
//     }

//     for (let colIdx = 0; colIdx < colsNum; colIdx++) {

//     }
//     // make pieces fall to bottom (gravity)
//     for (let col = 0; col < colsNum; col++) {
//         let newRowIdx = rowsNum - 1;
//         for (let row = rowsNum - 1; row >= 0; row--) {
//             if (newGrid[col][row] !== 0) {
//                 newGrid[col][newRowIdx] = newGrid[col][row];
//                 if (newRowIdx !== row) newGrid[col][row] = 0;
//                 newRowIdx--;
//             }
//         }
//     }

//     return newGrid;
// };

// const rotateGrid = (grid, rowsNum, colsNum) => {
//     let newGrid = createInitialGrid(colsNum, rowsNum);

//     for (let originalCol = 0; originalCol < colsNum; originalCol++) {
//         for (let originalRow = rowsNum - 1; originalRow >= 0; originalRow--) {
//             if (grid[originalRow][originalCol] !== 0) {
//                 // Find the lowest available position in the new column
//                 let newRow = rowsNum - 1;
//                 while (newRow > 0 && newGrid[originalCol][newRow] !== 0) {
//                     newRow--;
//                 }
//                 newGrid[originalCol][newRow] = grid[originalRow][originalCol];
//             }
//         }
//     }

//     return newGrid;
// };

// const rotateGrid = (grid, rowsNum, colsNum) => {
//     let newGrid = createInitialGrid(colsNum, rowsNum);

//     // Step 1: Rotate the Grid 90 Degrees Clockwise
//     for (let row = 0; row < rowsNum; row++) {
//         for (let col = 0; col < colsNum; col++) {
//             newGrid[col][rowsNum - 1 - row] = grid[row][col];
//         }
//     }

//     // Step 2: Apply Gravity
//     for (let col = 0; col < colsNum; col++) {
//         let column = newGrid[col];
//         let writeIndex = rowsNum - 1;
//         for (let readIndex = rowsNum - 1; readIndex >= 0; readIndex--) {
//             if (column[readIndex] !== 0) {
//                 column[writeIndex] = column[readIndex];
//                 if (writeIndex !== readIndex) {
//                     column[readIndex] = 0;
//                 }
//                 writeIndex--;
//             }
//         }
//     }

//     return newGrid;
// };

// const rotateGrid = (grid, rowsNum, colsNum) => {
//     let newGrid = createInitialGrid(colsNum, rowsNum);

//     // Step 1: Rotate the Grid 90 Degrees Clockwise
//     for (let col = 0; col < colsNum; col++) {
//         for (let row = 0; row < rowsNum; row++) {
//             newGrid[row][colsNum - 1 - col] = grid[col][row];
//         }
//     }

//     // Step 2: Apply Gravity
//     for (let newCol = 0; newCol < colsNum; newCol++) {
//         let column = newGrid[newCol];
//         let writeIndex = rowsNum - 1;
//         for (let readIndex = rowsNum - 1; readIndex >= 0; readIndex--) {
//             if (column[readIndex] !== 0) {
//                 column[writeIndex] = column[readIndex];
//                 if (writeIndex !== readIndex) {
//                     column[readIndex] = 0;
//                 }
//                 writeIndex--;
//             }
//         }
//     }

//     return newGrid;
// };

const rotateGrid = () => {};

export { createInitialGrid, checkForWin, rotateGrid };
