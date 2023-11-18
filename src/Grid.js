import { useState, useCallback, useMemo, memo } from 'react';

const rowsNum = 6;
const colsNum = 6;

const createInitialGrid = () =>
    Array(colsNum)
        .fill()
        .map(() => Array(rowsNum).fill(0));

const Cell = memo(({ value }) => <div className={`cell color-${value}`} />);

const Grid = ({ turn, handleChangeTurn }) => {
    const [grid, setGrid] = useState(createInitialGrid);

    const findFirstEmptySpace = (col) =>
        col.findLastIndex((cell) => cell === 0);

    const handleDropPieceOnCol = useCallback(
        (colIdx) => {
            const rowIdx = findFirstEmptySpace(grid[colIdx]);
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
                    onClick={() => handleDropPieceOnCol(colIdx)}
                >
                    {column.map((value, rowIdx) => (
                        <Cell key={`${colIdx}-${rowIdx}`} value={value} />
                    ))}
                </div>
            )),
        [grid, handleDropPieceOnCol]
    );

    return <div id='grid'>{renderedGrid}</div>;
};

export default Grid;
