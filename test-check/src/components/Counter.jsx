import { useState } from "react";

export default function Counter() {
  //state
  const [counter, setCounter] = useState(0);

  //action
  const increment = () => {
      setCounter(counter + 1); //will increment the counter variable by 1
    };

    const decrement = () => {
      setCounter(counter - 1); //will decrement the counter variable by 1
    };

    return (
        <div class="container">
          <p>Task 2</p>
            <button id="btn"  onClick={increment}>-</button> 
            <p>Counter : {counter}</p>
            <button id="btn"  onClick={decrement}>+</button>
        </div>
        //when the button is clicked, the increment function is called
    );
}