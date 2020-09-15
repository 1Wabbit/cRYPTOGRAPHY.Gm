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
            type: "floe.scienceLab.temperatureMixSy