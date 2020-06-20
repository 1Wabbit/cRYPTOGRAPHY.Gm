
"use strict";

fluid.defaults("floe.scienceLab.phSynth", {
    gradeNames: "flock.synth",

    synthDef: {
        id: "sum",
        mul: 1,
        ugen: "flock.ugen.sum",
        sources: [
            {
                id: "distortion",