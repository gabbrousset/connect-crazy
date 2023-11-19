import './App.css';

import { useState } from 'react';
import confetti from 'canvas-confetti';

import Grid from './Grid';

const rowsNum = 6;
const colsNum = 7;

const App = () => {
    const [turn, setTurn] = useState(1);
    const [hasWon, setHasWon] = useState(false);

    const handleChangeTurn = () => {
        setTurn((turn) => (turn === 1 ? 2 : 1));
    };

    const handleWin = () => {
        const colors = ['#fff'];

        if (turn === 1) {
            colors.push(...['#000099']);
        } else {
            colors.push(...['#990000']);
        }

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors,
        });
    };

    return (
        <div id='app'>
            <Grid
                rowsNum={rowsNum}
                colsNum={colsNum}
                turn={turn}
                handleChangeTurn={handleChangeTurn}
                handleWin={handleWin}
                hasWon={hasWon}
            />
        </div>
    );
};

export default App;
