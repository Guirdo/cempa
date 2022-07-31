'use strict';
console.clear()
console.log('--- CEMPA 🐱 COMPILER ---')
console.log('Compiling... ')
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
console.log('COMPLETED SUCCESSFULY')