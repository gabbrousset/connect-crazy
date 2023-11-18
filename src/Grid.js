import { useState, useCallback, useMemo, memo } from 'react';
import { checkForWin, createInitialGrid } from './utils';

const Cell = memo(({ value }) => <div className={`cell color-${value}`} />);

const Grid = ({ rowsNum, colsNum, turn, handleChangeTurn }) => {
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
            handleChangeTurn();
            console.log(
                checkForWin(grid, rowsNum, colsNum, rowIdx, colIdx, turn)
            );
        },
        [grid, handleChangeTurn, handleDropDiscOnCol, turn, rowsNum, colsNum]
    );

    const renderedGrid = useMemo(
        () =>
            grid.map((column, colIdx) => (
                <div
                    key={colIdx}
                    className='column'
                    onClick={() => handleTurn(colIdx)}
                >
                    {column.map((value, rowIdx) => (
                        <Cell key={`${colIdx}-${rowIdx}`} value={value} />
                    ))}
                </div>
            )),
        [grid, handleTurn]
    );

    return <div id='grid'>{renderedGrid}</div>;
};

export default Grid;
