const yargs = require('yargs');

// console.log(yargs.argv);

const command = yargs.argv._[0];
const params = yargs.argv;

if (command === 'fly') {
  console.log('Flying');
} else if (command === 'drive') {
  if (params.speed && params.car) {
    console.log(`Driving my ${params.car} at ${params.speed}mph.`);
  } else {
    console.log('Driving');
  }
} else {
  console.log('No match found!');
}
