import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameBoard from "./components/GameBoard/GameBoard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <GameBoard />
    </div>
  );
}

export default App;
