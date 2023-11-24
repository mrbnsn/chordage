import './keyboard.css';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import ScaleDisplay from './scale-display/scale-display';

const PianoKey = ({ note, type, onClick }) => {
    const classes = `key ${type}`;

    return (
        <Box className={classes} id={note} onClick={() => onClick(note)}></Box>
    );
};

const Keyboard = () => {
    const [note, setNote] = useState('C');

    const keyClicked = (note) => {
        console.log("Key clicked:", note);
        setNote(note);
    };

    return (
        <Box>
            <ScaleDisplay root={note} type={'Aeolian'}  />
        <Box id="piano">
            <PianoKey note="C" type="white" onClick={keyClicked} />
            <PianoKey note="C#" type="black" onClick={keyClicked} />
            <PianoKey note="D" type="white" onClick={keyClicked} />
            <PianoKey note="D#" type="black" onClick={keyClicked} />
            <PianoKey note="E" type="white" onClick={keyClicked} />
            <PianoKey note="F" type="white" onClick={keyClicked} />
            <PianoKey note="F#" type="black" onClick={keyClicked} />
            <PianoKey note="G" type="white" onClick={keyClicked} />
            <PianoKey note="G#" type="black" onClick={keyClicked} />
            <PianoKey note="A" type="white" onClick={keyClicked} />
            <PianoKey note="A#" type="black" onClick={keyClicked} />
            <PianoKey note="B" type="white" onClick={keyClicked} />
        </Box>
        </Box>
    );
};

export default Keyboard;