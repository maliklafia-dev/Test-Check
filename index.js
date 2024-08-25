/*Task 1 | Array Manipulation*/

function getEvenNumbers(tab) {
  let evens = []; //the array of even numbers
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) evens.push(tab[i]); //If the remainder when divided by 2 is 0, then add the current element of the array to the even array.
  }

  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

/*Task 2 | DOM Interaction*/

let btn = document.getElementById("btn"); //Recover the button element

btn.addEventListener("click", () => {
  let textElement = document.getElementById("myText"); //recover the paragraph with id "my test" when the button is clicked
  textElement.textContent = "Hello Check!"; //change the current text to "Hello Check!"
});
