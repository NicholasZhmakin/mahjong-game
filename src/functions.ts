import { ICardToCheck } from "./types/cardInterface";

export const generatePrimes: (limin: number) => number[] = limit => {
  const bools = [];
  const primes = [];
  for (let i = 1; i < limit; i++) {
    bools.push(true);
  }
  for (let i = 2; i < limit; i++) {
    if (bools[i - 2]) {
      for (let j = i * 2; j <= limit; j += i) {
        bools[j - 2] = false;
      }
    }
  }
  for (let p = 0; p < bools.length; p++) {
    if (bools[p]) {
      primes.push(p + 2);
      primes.push(p + 2);
    }
  }
  return primes;
};

export const shuffleArray: (array: []) => [] = array => {
  let currentIndex: any = array.length;
  let temporaryValue;
  let randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const createCards: (
  shuffleArray: []
) => ICardToCheck[] = shuffleArray => {
  let finalArray: any = [];
  shuffleArray.map(number =>
    finalArray.push({
      number,
      visible: false,
      complete: false,
      disabled: false
    })
  );
  return finalArray;
};
