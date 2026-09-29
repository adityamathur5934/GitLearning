// hello_world_final.js
// This module prints a welcoming greeting and exports a greet function.

// Print a greeting when the module is loaded.
console.log('Welcome!');

/**
 * Greet function that prints a greeting message.
 */
function greet() {
  console.log('Hello, welcome!');
}

module.exports = { greet };
