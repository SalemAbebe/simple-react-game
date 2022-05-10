import "./App.css";
import CardCharacter from "./components/Card/CardCharacter";
import CardNames from "./components/Card/CardNames";
import Carousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import Test from'./Test';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel/>
      <CardCharacter />
      {/* <CardNames /> */}
   
      {/* <Test/> */}
    </div>
  );
}

export default App;
