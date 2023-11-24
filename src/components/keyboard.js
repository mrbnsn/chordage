import './keyboard.css';
import React from 'react';

const PianoKey = ({ note, type, onClick }) => {
    const classes = `key ${type}`;
    return (
        <div className={classes} id={note} onClick={() => onClick(note)}></div>
    );
};

const Keyboard = () => {
    const keyClicked = (note) => {
        console.log("Key clicked:", note);
    };

    return (
        <div id="piano">
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
            <PianoKey note="C" type="white" onClick={keyClicked} />
        </div>
    );
};

export default Keyboard;