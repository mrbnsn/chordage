import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

const ScaleSelect = ({ onChange, selectedScales }) => {
    const scaleNames = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];

    const renderScaleSelections = () => (
        scaleNames.map((scale) => <ToggleButton size='small' key={scale} value={scale}>{scale}</ToggleButton> )
    );

    return (
        <Box sx={styles.container}>
            <ToggleButtonGroup
                value={selectedScales}
                onChange={onChange}
                color='success'
                size='small'
                sx={styles.toggleGroup}
            >
                {renderScaleSelections()}
            </ToggleButtonGroup>
        </Box>
    );
}

const styles = {
    container: {
        margin: '40px 20px',
    },
    toggleGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '375px',
        width: '90%',
        justifyContent: 'center',
        margin: '0 auto',
    },
}

export default ScaleSelect;
