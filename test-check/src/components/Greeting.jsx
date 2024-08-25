import "../App.css";

export default function Greeting({name}) {//prop name to get the from the parent component
    //rendering
    return (
        <div class="container">
            <p >Task 1</p>
            <p class="app-header">
                <h1>Hello {name} !</h1>
            </p>
        </div>
        //display the name
    );
}