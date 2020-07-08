
"use strict";

fluid.defaults("floe.scienceLab.temperatureSonification", {
    gradeNames: "floe.scienceLab.sonification",

    components: {
        band: {
            type: "floe.scienceLab.temperatureBand"
        }
    }
});