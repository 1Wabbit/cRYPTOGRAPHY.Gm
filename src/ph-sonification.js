
"use strict";

fluid.defaults("floe.scienceLab.phSonification", {
    gradeNames: "floe.scienceLab.sonification",

    components: {
        synth: {
            type: "floe.scienceLab.phSynth"
        },

        bufferLoader: {
            type: "floe.scienceLab.bufferLoader"
        }
    },

    events: {
        afterBuffersLoaded: null
    },

    listeners: {
        "afterBuffersLoaded.playSynth": "{synth}.play()"
    }
});