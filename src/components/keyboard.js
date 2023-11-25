import './keyboard.css';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import ScaleDisplay from './scale-display/scale-display';

const PianoKey = ({ note, type, onClick, selected }) => {
    const classes = selected ? `key ${type} selected` : `key ${type}`;

    return (
        <Box className={classes} id={note} onClick={() => onClick(note)} />
    );
};

const Keyboard = ({ scales }) => {
    const [note, setNote] = useState('E');

    const keyClicked = (note) => {
        setNote(note);
    };

    const renderScales = () => (
        scales.map((scale) => <ScaleDisplay key={scale} root={note} type={scale}  />)
    )

    const renderKeys = () => {
        
    }

    return (
        <Box>
            <Box id="piano" sx={styles.piano}>
                <PianoKey note="C" type="white" onClick={keyClicked} selected={note === "C"} />
                <PianoKey note="C#" type="black" onClick={keyClicked} selected={note === "C#"} />
                <PianoKey note="D" type="white" onClick={keyClicked} selected={note === "D"} />
                <PianoKey note="D#" type="black" onClick={keyClicked} selected={note === "D#"} />
                <PianoKey note="E" type="white" onClick={keyClicked} selected={note === "E"} />
                <PianoKey note="F" type="white" onClick={keyClicked} selected={note === "F"} />
                <PianoKey note="F#" type="black" onClick={keyClicked} selected={note === "F#"} />
                <PianoKey note="G" type="white" onClick={keyClicked} selected={note === "G"} />
                <PianoKey note="G#" type="black" onClick={keyClicked} selected={note === "G#"} />
                <PianoKey note="A" type="white" onClick={keyClicked} selected={note === "A"} />
                <PianoKey note="A#" type="black" onClick={keyClicked} selected={note === "A#"} />
                <PianoKey note="B" type="white" onClick={keyClicked} selected={note === "B"} />
            </Box>
            {renderScales()}
        </Box>
    );
};

const styles = {
    piano: {
        marginBottom: '20px',
    },
}

export default Keyboard;