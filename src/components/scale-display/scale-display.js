import React from 'react';
import { Box, Typography } from '@mui/material';
import chordData from '../../data/chord-data';
import { replaceMusicalQualifiers } from '../../lib/utils';

const ScaleDisplay = ({ root, type }) => {
    const renderChords = () => (
        chordData[root]?.[type]?.chords?.map((chord) => (
            <Box 
                key={chord}
                dangerouslySetInnerHTML={{ __html: `${replaceMusicalQualifiers(chord).replace(' ', '')}&nbsp;` }} 
            />
        )
    ));

    return (
        <Box sx={styles.container}>
            <Typography variant='h6' sx={styles.scaleTitle}>{type}</Typography>
            <Box sx={styles.chordContainer}>{renderChords()}</Box>
        </Box>
    )
}

const styles = {
    container: {
        marginBottom: '20px',
    },
    scaleTitle: {
        textAlign: 'center',
    },
    chordContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default ScaleDisplay;