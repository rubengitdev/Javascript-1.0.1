// User Stories

// 1
// You should have a function named runSequence with two parameters: config and cycles,
// where config represents a config object and cycles represents the maximum number of times
// the sequence can run before stopping.

// 2
// You should implement runSequence(config, cycles) using a for or while loop to iterate through each phase
// across the given number of cycles.

// 3
// The runSequence function should:
// Log No phases found and immediately return if config.phases is empty.
// Log Faulted phase! and stop the simulation early if config.fault is set to true.
// Log Invalid phase detected if duration <= 0.
// Log Switching to [color] for [duration] s for each valid phase. Replace [color] and [duration] with the corresponding properties of the phase object.
// For example, runSequence(config1, 1) should log:

// CODES
const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

// Functions
// 2
// You should implement runSequence(config, cycles) using a for or while loop to iterate through each phase
// across the given number of cycles.

// 3
// The runSequence function should:
// Log No phases found and immediately return if config.phases is empty.
// Log Faulted phase! and stop the simulation early if config.fault is set to true.
// Log Invalid phase detected if duration <= 0.
// Log Switching to [color] for [duration] s for each valid phase. Replace [color] and [duration] with the corresponding properties of the phase object.
// For example, runSequence(config1, 1) should log:
// Switching to green for 5 s
// Switching to yellow for 2 s
// Switching to red for 4 s

function runSequence(config, cycles) {
  for (i = 0; i < cycles; i++) {
    if (config.phases.length === 0) {
      console.log("No phases found");
      return;
    }
    if (config.fault) {
      console.log("Faulted phase!");
      return;
    }
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}
runSequence(config1, 1);
