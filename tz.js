const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

let targetTimeZone;

if (process.argv.length != 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimeZone = process.argv[2];
}

console.log(`The time at the ${targetTimeZone} is currently ${moment().tz(targetTimeZone).format()}.`);
