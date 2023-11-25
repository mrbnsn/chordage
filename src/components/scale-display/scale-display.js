import React from 'react';
import { Box } from '@mui/material';
import chordData from '../../data/chord-data';
import { replaceMusicalQualifiers } from '../../lib/utils';

const ScaleDisplay = ({ root, type }) => {
    const renderChords = () => (
        chordData[root]?.[type]?.chords?.map((chord) => (
            <Box 
                key={chord}
                dangerouslySetInnerHTML={{ __html: replaceMusicalQualifiers(chord).replace(' ', '') }} 
            />
        )
    ));

    return (
        <Box>
            <h3>{type}</h3>
            {renderChords()}
        </Box>
    )
}

export default ScaleDisplay;