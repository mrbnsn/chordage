import React from 'react';
import { Box } from '@mui/material';
import chordData from '../../data/chord-data';

const ScaleDisplay = ({ root, type }) => {
    console.log(`root:`, root);
    console.log(`type:`, type);
    const renderChords = () => (
        chordData[root]?.[type]?.chords?.map((chord) => <Box>{chord}</Box>) || 'No chord data'
    )

    return (
        <Box>
            <h3>{type}</h3>
            {renderChords()}
        </Box>
    )
}

export default ScaleDisplay;