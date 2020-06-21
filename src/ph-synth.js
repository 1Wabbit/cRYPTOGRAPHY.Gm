
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
                // when the pH scale is at 0 or at 14,
                // and it should be at 1.0 when we're at the midpoint of 7.
                amount: 1.0,
                mul: 0.5,