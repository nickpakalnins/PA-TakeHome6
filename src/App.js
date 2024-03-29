import "./App.css";
import Hero from "./components/Hero/Hero.js";
import TravelBlog from "./components/TravelBlog/TravelBlog.js";
import TravelData from "./TravelData.js";

function App() {
  const cards = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        head={item.placeHeading}
        imgOne={item.placeImg1}
        imgTwo={item.placeImg2}
        imgThree={item.placeImg3}
        desc={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <aside>
        <section>{cards}</section>
      </aside>
    </div>
  );
}

export default App;
