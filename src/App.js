import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <card name="Hello" />
    </div>
  );
}
function card(props) {
  <p>{props.name}</p>;
}
export default App;
