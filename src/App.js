import "./App.css";
import CardCharacter from "./components/Card/CardCharacter";
import CardNames from "./components/Card/CardNames";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <CardCharacter /> */}
      <CardNames />
    </div>
  );
}

export default App;
