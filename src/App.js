import "./App.css";
import CardCharacter from "./components/Card/CardCharacter";
import Carousel from "./components/Deck/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <CardCharacter />
    </div>
  );
}

export default App;
