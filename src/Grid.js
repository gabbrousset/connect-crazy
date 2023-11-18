import { useState } from 'react';

const Grid = ({ turn, handleChangeTurn }) => {
    const rowsNum = 6;
    const colsNum = 6;

    const [grid, setGrid] = useState(
        Array(colsNum)
            .fill()
            .map(() => Array(rowsNum).fill(0))
    );

    const findFirstEmptySpace = (col) => {
        for (let i = rowsNum - 1; i >= 0; i--) {
            if (col[i] === 0) {
                return i;
            }
        }
        return null;
    };

    const handleDropPieceOnCol = (colIdx) => {
        const rowIdx = findFirstEmptySpace(grid[colIdx]);
        setGrid((oldGrid) => {
            const newGrid = structuredClone(oldGrid);
            newGrid[colIdx][rowIdx] = turn;
            return newGrid;
        });
        handleChangeTurn();
    };

    return (
        <div id='grid'>
            {grid?.map((column, colIdx) => (
                <div
                    className='column'
                    onClick={() => handleDropPieceOnCol(colIdx)}
                >
                    {column.map((element, rowIdx) => (
                        <div
                            className={`element color-${grid[colIdx][rowIdx]}`}
                        >
                            {/* <p>{grid[colIdx][rowIdx]}</p> */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
