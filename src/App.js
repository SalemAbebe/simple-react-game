import "./App.css";
import data from "./data";
import Card from "./components/Card.js/Card";

function App() {
  return (
    <div className="App">
      {data.map((data) => (
        <Card
          img={data.image}
          characterName={data.characterName}
          id={data.id}
        />
      ))}
    </div>
  );
}

export default App;
