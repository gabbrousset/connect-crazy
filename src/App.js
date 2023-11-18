import { useState } from 'react';
import './App.css';
import Grid from './Grid';

const App = () => {
    const [turn, setTurn] = useState(1);
    const handleChangeTurn = () => {
        console.log('chaning turn now');
        setTurn((turn) => (turn === 1 ? 2 : 1));
    };

    return (
        <div id='app'>
            <Grid turn={turn} handleChangeTurn={handleChangeTurn}></Grid>
            <p>turn: {turn === 1 ? 'blue' : 'red'}</p>
        </div>
    );
};

export default App;
