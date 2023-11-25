function replaceMusicalQualifiers(str) {
    const replacements = {
        'major': '', // Major has no specific symbol in most cases
        'minor': 'm', // Represented as 'm'
        'diminished': '&#176;', // Diminished symbol (°)
        'augmented': '+' // Augmented represented by a plus sign
    };

    return str.replace(/\bmajor\b|\bminor\b|\bdiminished\b|\baugmented\b/gi, match => {
        return replacements[match.toLowerCase()];
    });
}

export {
    replaceMusicalQualifiers,
}