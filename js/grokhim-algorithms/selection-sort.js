"use strict";
// dont work
const findSmallest = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = arr => {
  let newArr = [];

  while (arr.length) {
    let smallest = findSmallest(arr);
    newArr.push(arr.pop(smallest));
  }

  return newArr;
};

console.log(selectionSort([5, 3, 6, 2, 10]));
