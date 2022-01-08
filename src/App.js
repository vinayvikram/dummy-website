import "./App.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import QuickLinks from "./components/QuickLinks";
import CenterCard from "./components/CenterCard";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";

const places = ["UNITED KINGDOM", "USA", "CHINA", "INDIA"];
const cities_dict = {
  "UNITED KINGDOM": ["London"],
  USA: ["New York", "Los Angeles"],
  CHINA: ["Shanghai", "Beijing", "Hong Kong"],
  INDIA: ["Mumbai", "Bangalore"],
};

const bgColor = ["#faeebe", "#f4e7ec", "#c9d9e6", "#faeebe"];

function App() {
  return (
    <div className="home">
      <TopBar />
      <Header />
      <MainPage />
      {places.map((place, i) => (
        <CenterCard
          place={place}
          cities={cities_dict[place]}
          bgColor={bgColor[i]}
        />
      ))}
      <ContactUs />
      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
