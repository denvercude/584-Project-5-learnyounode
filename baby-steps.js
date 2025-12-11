let sum = 0;

// start at index 2 of process.argv
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]); 
}

console.log(sum);