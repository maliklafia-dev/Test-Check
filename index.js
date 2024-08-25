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

/*TASK 3 | Basic Fetch*/
async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos"); //GET request to take the elements from the API
    let todos = await res.json(); //convert data into json when received
    return todos; //return all the datas
  } catch (error) {
    console.error("Error while recovering the todos: ", error);
  }
}

async function displayTodos() {
  let myList = document.getElementById("todoList"); //Ask the DOM to take the unordored list element
  let todos = await fetchData(); //call the function fetchData to get the todos list

  //Get and display the five first todos
  for (let i = 0; i < 5; i++) {
    let todo = todos[i]; //get a todo element
    let listElement = document.createElement("li"); //create a li element
    listElement.textContent = todo.title; //display the title of the todo object

    myList.appendChild(listElement); //add the li element to the unordored list.
  }
}

displayTodos(); //call the function to execute the code.
