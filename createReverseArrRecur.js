// Create a reverse sorted array for two different number inputs and range
// Input > 2, 9
// Output > [9,8,7,6,5,4,3,2,1]

const createArrRecur = (firstIndx, lastIndx) => {
  if (firstIndx > lastIndx) {
    return [];
  } else {
    let numbers = createArrRecur(firstIndx + 1, lastIndx);
    numbers.push(firstIndx);
    return numbers;
  }
};

console.log(createArrRecur(2, 9));
