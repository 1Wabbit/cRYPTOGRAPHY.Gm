
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