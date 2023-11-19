import { useState, useCallback, useMemo } from 'react';
import { checkForWin, createInitialGrid, rotateGrid } from './utils';
import Cell from './Cell';

const Grid = ({
    rowsNum,
    colsNum,
    turn,
    handleChangeTurn,
    handleWin,
    hasWon,
}) => {
    const [grid, setGrid] = useState(() => createInitialGrid(colsNum, rowsNum));

    const findFirstEmptyCell = (col) => col.findLastIndex((cell) => cell === 0);

    const handleDropDiscOnCol = useCallback((colIdx, rowIdx, turn) => {
        setGrid((prevGrid) =>
            prevGrid.map((column, idx) =>
                idx === colIdx
                    ? [
                          ...column.slice(0, rowIdx),
                          turn,
                          ...column.slice(rowIdx + 1),
                      ]
                    : column
            )
        );
        return true;
    }, []);

    const handleTurn = useCallback(
        (colIdx) => {
            const rowIdx = findFirstEmptyCell(grid[colIdx]);
            handleDropDiscOnCol(colIdx, rowIdx, turn);
            if (checkForWin(grid, rowsNum, colsNum, rowIdx, colIdx, turn)) {
                handleWin();
            } else {
                handleChangeTurn();
            }
        },
        [
            grid,
            handleChangeTurn,
            handleDropDiscOnCol,
            handleWin,
            turn,
            rowsNum,
            colsNum,
        ]
    );

    const handleRotate = () => {
        setGrid(rotateGrid(grid, rowsNum, colsNum));
    };

    // todo change useMemo to the cells instead of the full column
    // because the turn dep is making it rerender every time either way i think
    const renderedGrid = useMemo(
        () =>
            grid.map((column, colIdx) => (
                <div
                    key={colIdx}
                    className={`column hover-color-${turn}`}
                    onClick={() => handleTurn(colIdx)}
                >
                    {column.map((value, rowIdx) => (
                        <Cell key={`${colIdx}-${rowIdx}`} value={value} />
                    ))}
                </div>
            )),
        [grid, handleTurn, turn]
    );

    return (
        <>
            <div id='grid'>{renderedGrid}</div>
            <button onClick={handleRotate}>rotate</button>
        </>
    );
};

export default Grid;
