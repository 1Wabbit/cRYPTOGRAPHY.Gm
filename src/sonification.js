
/**
 * A base component for sonification demos.
 */
fluid.defaults("floe.scienceLab.sonification", {
    gradeNames: "fluid.component",

    distributeOptions: [
        {
            record: {
                enviro: "{sonification}.enviro"
            },
            target: "{that flock.node}.options.components"
        }
    ],

    components: {
        enviro: {
            type: "flock.enviro"
        },

        playButton: {
            type: "flock.ui.enviroPlayButton",
            container: ".flock-playButton",
            options: {
                components: {
                    enviro: "{sonification}.enviro"
                }
            }
        }
    }
});