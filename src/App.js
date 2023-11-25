import './app.css';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Keyboard from './components/keyboard';
import ScaleSelect from './components/scale-select/scale-select';

function App() {
    const [scales, setScales] = useState(['Ionian']);

    const handleScaleSelect = (event, newScales) => {
        setScales(newScales);
    }

    return (
        <Box sx={styles.container}>
            <ScaleSelect onChange={handleScaleSelect} selectedScales={scales} />
            <Keyboard scales={scales} />
        </Box>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
    }
}

export default App;
