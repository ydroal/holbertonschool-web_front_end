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
countPrimeNumbers();
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
