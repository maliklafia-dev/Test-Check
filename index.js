/*Task 1 | Array Manipulation*/

function getEvenNumbers(tab) {
  let evens = []; //the array of even numbers
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) evens.push(tab[i]); //If the remainder when divided by 2 is 0, then add the current element of the array to the even array.
  }

  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
