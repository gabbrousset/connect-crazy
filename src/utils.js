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

const rotateGrid = () => {};

export { createInitialGrid, checkForWin, rotateGrid };
