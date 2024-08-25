import { useState } from "react";

export default function ListRendering() {
    //state
    const [names, setList] = useState([
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Charlie"},
        {id: 4, name: "David"},
    ]);

    //render
    return (
        <div class="container">
            <p>Task 3</p>
            <ul>
                {names.map((index) => ( //browse the list with an index
                    <li>{index.name}</li> //display each name in a '<li>' element
                ))}
            </ul>
        </div>
    );
}