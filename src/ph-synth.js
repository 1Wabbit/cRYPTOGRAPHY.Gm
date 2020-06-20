
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
                ugen: "flock.ugen.distortion.deJonge",

                // Alan, modulate this parameter, "distortion.amount",
                // so that it increases at the poles.
                // So it should be about 5.0 (or a little higher?)