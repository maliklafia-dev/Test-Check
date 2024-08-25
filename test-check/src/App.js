import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ListRendering from "./components/List";

function App() {
  const name = "Alice";

  //render
  return (
    <div className="app">
      <Greeting name={name} />
      <Counter />
      <ListRendering />
    </div>
  );
}

export default App;
