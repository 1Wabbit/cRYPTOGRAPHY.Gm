"use strict";

fluid.defaults("floe.scienceLab.temperatureBand", {
    gradeNames: "flock.band",

    components: {
        freqSynth: {
            type: "floe.scienceLab.temperatureFreqSynth",
            options: {
                addToEnvironment: "head"
            }
        },

        mixSynth: {
            type: "floe.scienceLab.temperatureMixSynth",
            options: {
                addToEnvironment: "head"
            }
        },

        soundSynth: {
            type: "floe.scienceLab.temperatureSoundSynth",
            options: {
                addToEnvironment: "tail"
            }
        }
    }
});

fluid.defaults("floe.scienceLab.temperatureFreqSynth", {
    gradeN