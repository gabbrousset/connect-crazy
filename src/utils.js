const createInitialGrid = (rowsNum, colsNum) =>
    Array(colsNum)
        .fill()
        .map(() => Array(rowsNum).fill(0));

export { createInitialGrid };
