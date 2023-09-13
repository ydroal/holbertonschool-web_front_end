function countPrimeNumbers() {
  let count = 1; // 2 含めて１からスタート
  for (let i = 3; i <= 100; i++) {
    let isPrime = true;
    for(let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}

const start = performance.now();

for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers, 0);
}

const end = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);