function findTargetInsideArray(array, target) {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push([array[i], array[j]]);
      }
    }
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Result : ", result);
}

findTargetInsideArray([1, 2, 3, 2], 4);
findTargetInsideArray([2, 2, 1, 2], 4);
