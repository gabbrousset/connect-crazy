import { useState, useCallback, useMemo, memo } from 'react';
import { createInitialGrid } from './utils';

const Cell = memo(({ value }) => <div className={`cell color-${value}`} />);

const Grid = ({ rowsNum, colsNum, turn, handleChangeTurn }) => {
    const [grid, setGrid] = useState(() => createInitialGrid(rowsNum, colsNum));

    const findFirstEmptyCell = (col) => col.findLastIndex((cell) => cell === 0);

    const handleDropDiscOnCol = useCallback(
        (colIdx) => {
            const rowIdx = findFirstEmptyCell(grid[colIdx]);
            if (rowIdx !== -1) {
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
                handleChangeTurn();
            }
        },
        [grid, turn, handleChangeTurn]
    );

    const renderedGrid = useMemo(
        () =>
            grid.map((column, colIdx) => (
                <div
                    key={colIdx}
                    className='column'
                    onClick={() => handleDropDiscOnCol(colIdx)}
                >
                    {column.map((value, rowIdx) => (
                        <Cell key={`${colIdx}-${rowIdx}`} value={value} />
                    ))}
                </div>
            )),
        [grid, handleDropDiscOnCol]
    );

    return <div id='grid'>{renderedGrid}</div>;
};

export default Grid;
