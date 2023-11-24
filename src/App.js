import './app.css';
import React from 'react';
import { Box } from '@mui/material';
import Keyboard from './components/keyboard';

function App() {
    return (
        <Box sx={styles.container}>
            <Keyboard />
        </Box>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default App;
