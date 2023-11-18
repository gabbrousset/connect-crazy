import { useState } from 'react';
import './App.css';
import Grid from './Grid';

const rowsNum = 6;
const colsNum = 7;

const App = () => {
    const [turn, setTurn] = useState(1);
    const handleChangeTurn = () => {
        setTurn((turn) => (turn === 1 ? 2 : 1));
    };

    return (
        <div id='app'>
            <Grid
                rowsNum={rowsNum}
                colsNum={colsNum}
                turn={turn}
                handleChangeTurn={handleChangeTurn}
            ></Grid>
            <p>turn: {turn === 1 ? 'blue' : 'red'}</p>
        </div>
    );
};

export default App;
