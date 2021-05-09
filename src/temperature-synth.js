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
    gradeNames: "flock.modelSynth",

    synthDef: {
        ugen: "flock.ugen.out",
        bus: 4,
        expand: 1,
        sources: [
            {
                id: "frequency",
                ugen: "flock.ugen.value",
                rate: "control",
                // Alan, scale this value, "frequency.value", logarithmically between 120 an