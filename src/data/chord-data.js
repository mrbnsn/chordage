const chordPatterns = {
    "C": {
        "Ionian": {
            "chords": ["C major", "D minor", "E minor", "F major", "G major", "A minor", "B diminished"],
            "V_x": ["G major", "A major", "B major", "C major", "D major", "E major", "F# major"]
        },
        "Dorian": {
            "chords": ["C minor", "D minor", "Eb major", "F major", "G minor", "A diminished", "Bb major"],
            "V_x": ["G major", "A major", "Bb major", "C major", "D major", "Eb major", "F major"]
        },
        "Phrygian": {
            "chords": ["C minor", "Db major", "Eb major", "F minor", "G diminished", "Ab major", "Bb minor"],
            "V_x": ["G major", "Ab major", "Bb major", "C major", "Db major", "Eb major", "F major"]
        },
        "Lydian": {
            "chords": ["C major", "D major", "E minor", "F# diminished", "G major", "A minor", "B minor"],
            "V_x": ["G major", "A major", "B major", "C# major", "D major", "E major", "F# major"]
        },
        "Mixolydian": {
            "chords": ["C major", "D minor", "E diminished", "F major", "G minor", "A minor", "Bb major"],
            "V_x": ["G major", "A major", "B major", "C major", "D major", "E major", "F major"]
        },
        "Aeolian": {
            "chords": ["C minor", "D diminished", "Eb major", "F minor", "G minor", "Ab major", "Bb major"],
            "V_x": ["G major", "A major", "Bb major", "C major", "D major", "Eb major", "F major"]
        },
        "Locrian": {
            "chords": ["C diminished", "Db major", "Eb minor", "F minor", "Gb major", "Ab major", "Bb minor"],
            "V_x": ["G major", "Ab major", "Bb major", "C major", "Db major", "Eb major", "F major"]
        }
    },
    "C#": {
        "Ionian": {
            "chords": ["C# major", "D# minor", "E# minor", "F# major", "G# major", "A# minor", "B# diminished"],
            "V_x": ["G# major", "A# major", "B# major", "C# major", "D# major", "E# major", "F## major"]
        },
        "Dorian": {
            "chords": ["C# minor", "D# minor", "E major", "F# major", "G# minor", "A# diminished", "B major"],
            "V_x": ["G# major", "A# major", "B major", "C# major", "D# major", "E major", "F# major"]
        },
        "Phrygian": {
            "chords": ["C# minor", "D major", "E major", "F# minor", "G diminished", "G# minor", "A major"],
            "V_x": ["G# major", "A major", "B major", "C# major", "D major", "E major", "F# major"]
        },
        "Lydian": {
            "chords": ["C# major", "D# major", "E# minor", "F## diminished", "G# major", "A# minor", "B# minor"],
            "V_x": ["G# major", "A# major", "B# major", "C## major", "D# major", "E# major", "F## major"]
        },
        "Mixolydian": {
            "chords": ["C# major", "D# minor", "E# diminished", "F# major", "G# minor", "A# minor", "B major"],
            "V_x": ["G# major", "A# major", "B# major", "C# major", "D# major", "E# major", "F# major"]
        },
        "Aeolian": {
            "chords": ["C# minor", "D# diminished", "E major", "F# minor", "G# minor", "A major", "B major"],
            "V_x": ["G# major", "A# major", "B major", "C# major", "D# major", "E major", "F# major"]
        },
        "Locrian": {
            "chords": ["C# diminished", "D major", "E minor", "F# minor", "G major", "A major", "B minor"],
            "V_x": ["G# major", "A major", "B major", "C# major", "D major", "E major", "F# major"]
        }
    },
    "D": {
        "Ionian": {
            "chords": ["D major", "E minor", "F# minor", "G major", "A major", "B minor", "C# diminished"],
            "V_x": ["A major", "B major", "C# major", "D major", "E major", "F# major", "G# major"]
        },
        "Dorian": {
            "chords": ["D minor", "E minor", "F major", "G major", "A minor", "B diminished", "C major"],
            "V_x": ["A major", "B major", "C major", "D major", "E major", "F major", "G major"]
        },
        "Phrygian": {
            "chords": ["D minor", "Eb major", "F major", "G minor", "Ab diminished", "A minor", "Bb major"],
            "V_x": ["A major", "Bb major", "C major", "D major", "Eb major", "F major", "G major"]
        },
        "Lydian": {
            "chords": ["D major", "E major", "F# minor", "G# diminished", "A major", "B minor", "C# minor"],
            "V_x": ["A major", "B major", "C# major", "D# major", "E major", "F# major", "G# major"]
        },
        "Mixolydian": {
            "chords": ["D major", "E minor", "F# diminished", "G major", "A minor", "B minor", "C major"],
            "V_x": ["A major", "B major", "C# major", "D major", "E major", "F# major", "G major"]
        },
        "Aeolian": {
            "chords": ["D minor", "E diminished", "F major", "G minor", "A minor", "Bb major", "C major"],
            "V_x": ["A major", "B major", "C major", "D major", "E major", "F major", "G major"]
        },
        "Locrian": {
            "chords": ["D diminished", "Eb major", "F minor", "G minor", "Ab major", "Bb major", "C minor"],
            "V_x": ["A major", "Bb major", "C major", "D major", "Eb major", "F major", "G major"]
        }
    },
    "D#": {
        "Ionian": {
            "chords": ["D# major", "E# minor", "F## minor", "G# major", "A# major", "B# minor", "C## diminished"],
            "V_x": ["A# major", "B# major", "C## major", "D# major", "E# major", "F## major", "G## major"]
        },
        "Dorian": {
            "chords": ["D# minor", "E# minor", "F# major", "G# major", "A# minor", "B# diminished", "C# major"],
            "V_x": ["A# major", "B# major", "C# major", "D# major", "E# major", "F# major", "G# major"]
        },
        "Phrygian": {
            "chords": ["D# minor", "E major", "F# major", "G# minor", "A diminished", "A# minor", "B major"],
            "V_x": ["A# major", "B major", "C# major", "D# major", "E major", "F# major", "G# major"]
        },
        "Lydian": {
            "chords": ["D# major", "E# major", "F## minor", "G## diminished", "A# major", "B# minor", "C## minor"],
            "V_x": ["A# major", "B# major", "C## major", "D## major", "E# major", "F## major", "G## major"]
        },
        "Mixolydian": {
            "chords": ["D# major", "E# minor", "F## diminished", "G# major", "A# minor", "B# minor", "C# major"],
            "V_x": ["A# major", "B# major", "C## major", "D# major", "E# major", "F## major", "G# major"]
        },
        "Aeolian": {
            "chords": ["D# minor", "E# diminished", "F# major", "G# minor", "A# minor", "B major", "C# major"],
            "V_x": ["A# major", "B# major", "C# major", "D# major", "E# major", "F# major", "G# major"]
        },
        "Locrian": {
            "chords": ["D# diminished", "E major", "F# minor", "G# minor", "A major", "B major", "C# minor"],
            "V_x": ["A# major", "B major", "C# major", "D# major", "E major", "F# major", "G# major"]
        }
    },
    "E": {
        "Ionian": {
            "chords": ["E major", "F# minor", "G# minor", "A major", "B major", "C# minor", "D# diminished"],
            "V_x": ["B major", "C# major", "D# major", "E major", "F# major", "G# major", "A# major"]
        },
        "Dorian": {
            "chords": ["E minor", "F# minor", "G major", "A major", "B minor", "C# diminished", "D major"],
            "V_x": ["B major", "C# major", "D major", "E major", "F# major", "G major", "A major"]
        },
        "Phrygian": {
            "chords": ["E minor", "F major", "G major", "A minor", "Bb diminished", "B minor", "C major"],
            "V_x": ["B major", "C major", "D major", "E major", "F major", "G major", "A major"]
        },
        "Lydian": {
            "chords": ["E major", "F# major", "G# minor", "A# diminished", "B major", "C# minor", "D# minor"],
            "V_x": ["B major", "C# major", "D# major", "E# major", "F# major", "G# major", "A# major"]
        },
        "Mixolydian": {
            "chords": ["E major", "F# minor", "G# diminished", "A major", "B minor", "C# minor", "D major"],
            "V_x": ["B major", "C# major", "D# major", "E major", "F# major", "G# major", "A major"]
        },
        "Aeolian": {
            "chords": ["E minor", "F# diminished", "G major", "A minor", "B minor", "C major", "D major"],
            "V_x": ["B major", "C# major", "D major", "E major", "F# major", "G major", "A major"]
        },
        "Locrian": {
            "chords": ["E diminished", "F major", "G minor", "A minor", "Bb major", "C major", "D minor"],
            "V_x": ["B major", "C major", "D major", "E major", "F major", "G major", "A major"]
        }
    },
    "F": {
        "Ionian": {
            "chords": ["F major", "G minor", "A minor", "Bb major", "C major", "D minor", "E diminished"],
            "V_x": ["C major", "D major", "E major", "F major", "G major", "A major", "B major"]
        },
        "Dorian": {
            "chords": ["F minor", "G minor", "Ab major", "Bb major", "C minor", "D diminished", "Eb major"],
            "V_x": ["C major", "D major", "Eb major", "F major", "G major", "Ab major", "Bb major"]
        },
        "Phrygian": {
            "chords": ["F minor", "Gb major", "Ab major", "Bb minor", "C diminished", "Db major", "Eb minor"],
            "V_x": ["C major", "Db major", "Eb major", "F major", "Gb major", "Ab major", "Bb major"]
        },
        "Lydian": {
            "chords": ["F major", "G major", "A minor", "B diminished", "C major", "D minor", "E minor"],
            "V_x": ["C major", "D major", "E major", "F# major", "G major", "A major", "B major"]
        },
        "Mixolydian": {
            "chords": ["F major", "G minor", "A diminished", "Bb major", "C minor", "D minor", "Eb major"],
            "V_x": ["C major", "D major", "E major", "F major", "G major", "A major", "Bb major"]
        },
        "Aeolian": {
            "chords": ["F minor", "G diminished", "Ab major", "Bb minor", "C minor", "Db major", "Eb major"],
            "V_x": ["C major", "D major", "Eb major", "F major", "G major", "Ab major", "Bb major"]
        },
        "Locrian": {
            "chords": ["F diminished", "Gb major", "Ab minor", "Bb minor", "Cb major", "Db major", "Eb minor"],
            "V_x": ["C major", "Db major", "Eb major", "F major", "Gb major", "Ab major", "Bb major"]
        }
    },
    "F#": {
        "Ionian": {
            "chords": ["F# major", "G# minor", "A# minor", "B major", "C# major", "D# minor", "E# diminished"],
            "V_x": ["C# major", "D# major", "E# major", "F# major", "G# major", "A# major", "B# major"]
        },
        "Dorian": {
            "chords": ["F# minor", "G# minor", "A major", "B major", "C# minor", "D# diminished", "E major"],
            "V_x": ["C# major", "D# major", "E major", "F# major", "G# major", "A major", "B major"]
        },
        "Phrygian": {
            "chords": ["F# minor", "G major", "A major", "B minor", "C diminished", "C# minor", "D major"],
            "V_x": ["C# major", "D major", "E major", "F# major", "G major", "A major", "B major"]
        },
        "Lydian": {
            "chords": ["F# major", "G# major", "A# minor", "B# diminished", "C# major", "D# minor", "E# minor"],
            "V_x": ["C# major", "D# major", "E# major", "F## major", "G# major", "A# major", "B# major"]
        },
        "Mixolydian": {
            "chords": ["F# major", "G# minor", "A# diminished", "B major", "C# minor", "D# minor", "E major"],
            "V_x": ["C# major", "D# major", "E# major", "F# major", "G# major", "A# major", "B major"]
        },
        "Aeolian": {
            "chords": ["F# minor", "G# diminished", "A major", "B minor", "C# minor", "D major", "E major"],
            "V_x": ["C# major", "D# major", "E major", "F# major", "G# major", "A major", "B major"]
        },
        "Locrian": {
            "chords": ["F# diminished", "G major", "A minor", "B minor", "C major", "D major", "E minor"],
            "V_x": ["C# major", "D major", "E major", "F# major", "G major", "A major", "B major"]
        }
    },
    "G": {
        "Ionian": {
            "chords": ["G major", "A minor", "B minor", "C major", "D major", "E minor", "F# diminished"],
            "V_x": ["D major", "E major", "F# major", "G major", "A major", "B major", "C# major"]
        },
        "Dorian": {
            "chords": ["G minor", "A minor", "Bb major", "C major", "D minor", "E diminished", "F major"],
            "V_x": ["D major", "E major", "F major", "G major", "A major", "Bb major", "C major"]
        },
        "Phrygian": {
            "chords": ["G minor", "Ab major", "Bb major", "C minor", "Db diminished", "D minor", "Eb major"],
            "V_x": ["D major", "Eb major", "F major", "G major", "Ab major", "Bb major", "C major"]
        },
        "Lydian": {
            "chords": ["G major", "A major", "B minor", "C# diminished", "D major", "E minor", "F# minor"],
            "V_x": ["D major", "E major", "F# major", "G# major", "A major", "B major", "C# major"]
        },
        "Mixolydian": {
            "chords": ["G major", "A minor", "B diminished", "C major", "D minor", "E minor", "F major"],
            "V_x": ["D major", "E major", "F# major", "G major", "A major", "B major", "C major"]
        },
        "Aeolian": {
            "chords": ["G minor", "A diminished", "Bb major", "C minor", "D minor", "Eb major", "F major"],
            "V_x": ["D major", "E major", "F major", "G major", "A major", "Bb major", "C major"]
        },
        "Locrian": {
            "chords": ["G diminished", "Ab major", "Bb minor", "C minor", "Db major", "Eb major", "F minor"],
            "V_x": ["D major", "Eb major", "F major", "G major", "Ab major", "Bb major", "C major"]
        }
    },
    "G#": {
        "Ionian": {
            "chords": ["G# major", "A# minor", "B# minor", "C# major", "D# major", "E# minor", "F## diminished"],
            "V_x": ["D# major", "E# major", "F## major", "G# major", "A# major", "B# major", "C## major"]
        },
        "Dorian": {
            "chords": ["G# minor", "A# minor", "B major", "C# major", "D# minor", "E# diminished", "F# major"],
            "V_x": ["D# major", "E# major", "F# major", "G# major", "A# major", "B major", "C# major"]
        },
        "Phrygian": {
            "chords": ["G# minor", "A major", "B major", "C# minor", "D diminished", "D# minor", "E major"],
            "V_x": ["D# major", "E major", "F# major", "G# major", "A major", "B major", "C# major"]
        },
        "Lydian": {
            "chords": ["G# major", "A# major", "B# minor", "C## diminished", "D# major", "E# minor", "F## minor"],
            "V_x": ["D# major", "E# major", "F## major", "G## major", "A# major", "B# major", "C## major"]
        },
        "Mixolydian": {
            "chords": ["G# major", "A# minor", "B# diminished", "C# major", "D# minor", "E# minor", "F# major"],
            "V_x": ["D# major", "E# major", "F## major", "G# major", "A# major", "B# major", "C# major"]
        },
        "Aeolian": {
            "chords": ["G# minor", "A# diminished", "B major", "C# minor", "D# minor", "E major", "F# major"],
            "V_x": ["D# major", "E# major", "F# major", "G# major", "A# major", "B major", "C# major"]
        },
        "Locrian": {
            "chords": ["G# diminished", "A major", "B minor", "C# minor", "D major", "E major", "F# minor"],
            "V_x": ["D# major", "E major", "F# major", "G# major", "A major", "B major", "C# major"]
        }
    },
    "A": {
        "Ionian": {
            "chords": ["A major", "B minor", "C# minor", "D major", "E major", "F# minor", "G# diminished"],
            "V_x": ["E major", "F# major", "G# major", "A major", "B major", "C# major", "D# major"]
        },
        "Dorian": {
            "chords": ["A minor", "B minor", "C major", "D major", "E minor", "F# diminished", "G major"],
            "V_x": ["E major", "F# major", "G major", "A major", "B major", "C major", "D major"]
        },
        "Phrygian": {
            "chords": ["A minor", "Bb major", "C major", "D minor", "Eb diminished", "E minor", "F major"],
            "V_x": ["E major", "F major", "G major", "A major", "Bb major", "C major", "D major"]
        },
        "Lydian": {
            "chords": ["A major", "B major", "C# minor", "D# diminished", "E major", "F# minor", "G# minor"],
            "V_x": ["E major", "F# major", "G# major", "A# major", "B major", "C# major", "D# major"]
        },
        "Mixolydian": {
            "chords": ["A major", "B minor", "C# diminished", "D major", "E minor", "F# minor", "G major"],
            "V_x": ["E major", "F# major", "G# major", "A major", "B major", "C# major", "D major"]
        },
        "Aeolian": {
            "chords": ["A minor", "B diminished", "C major", "D minor", "E minor", "F major", "G major"],
            "V_x": ["E major", "F major", "G major", "A major", "B major", "C major", "D major"]
        },
        "Locrian": {
            "chords": ["A diminished", "Bb major", "C minor", "D minor", "Eb major", "F major", "G minor"],
            "V_x": ["E major", "F major", "G major", "A major", "Bb major", "C major", "D major"]
        }
    },
    "A#": {
        "Ionian": {
            "chords": ["A# major", "B# minor", "C## minor", "D# major", "E# major", "F## minor", "G## diminished"],
            "V_x": ["E# major", "F## major", "G## major", "A# major", "B# major", "C## major", "D## major"]
        },
        "Dorian": {
            "chords": ["A# minor", "B# minor", "C# major", "D# major", "E# minor", "F## diminished", "G# major"],
            "V_x": ["E# major", "F## major", "G# major", "A# major", "B# major", "C# major", "D# major"]
        },
        "Phrygian": {
            "chords": ["A# minor", "B major", "C# major", "D# minor", "E diminished", "E# minor", "F# major"],
            "V_x": ["E# major", "F# major", "G# major", "A# major", "B major", "C# major", "D# major"]
        },
        "Lydian": {
            "chords": ["A# major", "B# major", "C## minor", "D## diminished", "E# major", "F## minor", "G## minor"],
            "V_x": ["E# major", "F## major", "G## major", "A## major", "B# major", "C## major", "D## major"]
        },
        "Mixolydian": {
            "chords": ["A# major", "B# minor", "C## diminished", "D# major", "E# minor", "F## minor", "G# major"],
            "V_x": ["E# major", "F## major", "G## major", "A# major", "B# major", "C## major", "D# major"]
        },
        "Aeolian": {
            "chords": ["A# minor", "B# diminished", "C# major", "D# minor", "E# minor", "F# major", "G# major"],
            "V_x": ["E# major", "F## major", "G# major", "A# major", "B# major", "C# major", "D# major"]
        },
        "Locrian": {
            "chords": ["A# diminished", "B major", "C# minor", "D# minor", "E major", "F# major", "G# minor"],
            "V_x": ["E# major", "F# major", "G# major", "A# major", "B major", "C# major", "D# major"]
        }
    },
    "B": {
        "Ionian": {
            "chords": ["B major", "C# minor", "D# minor", "E major", "F# major", "G# minor", "A# diminished"],
            "V_x": ["F# major", "G# major", "A# major", "B major", "C# major", "D# major", "E# major"]
        },
        "Dorian": {
            "chords": ["B minor", "C# minor", "D major", "E major", "F# minor", "G# diminished", "A major"],
            "V_x": ["F# major", "G# major", "A major", "B major", "C# major", "D major", "E major"]
        },
        "Phrygian": {
            "chords": ["B minor", "C major", "D major", "E minor", "F diminished", "F# minor", "G major"],
            "V_x": ["F# major", "G major", "A major", "B major", "C major", "D major", "E major"]
        },
        "Lydian": {
            "chords": ["B major", "C# major", "D# minor", "E# diminished", "F# major", "G# minor", "A# minor"],
            "V_x": ["F# major", "G# major", "A# major", "B# major", "C# major", "D# major", "E# major"]
        },
        "Mixolydian": {
            "chords": ["B major", "C# minor", "D# diminished", "E major", "F# minor", "G# minor", "A major"],
            "V_x": ["F# major", "G# major", "A# major", "B major", "C# major", "D# major", "E major"]
        },
        "Aeolian": {
            "chords": ["B minor", "C# diminished", "D major", "E minor", "F# minor", "G major", "A major"],
            "V_x": ["F# major", "G# major", "A major", "B major", "C# major", "D major", "E major"]
        },
        "Locrian": {
            "chords": ["B diminished", "C major", "D minor", "E minor", "F major", "G major", "A minor"],
            "V_x": ["F# major", "G major", "A major", "B major", "C major", "D major", "E major"]
        }
    },
}

export default chordPatterns;