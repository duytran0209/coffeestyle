import CoffeeMagazine from "./components/CoffeeMagazine";
import FeatureMugs from "./components/FeatureMugs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Stories from "./components/Stories";
import SubscribeUs from "./components/SubscribeUs";
import Story from "./Story";

function App() {
  return (
    <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px=8">
      <Header />
      <Hero
        text={"BEST PLACE TO BUY COFFEE"}
        title={"Coffee Mugs"}
        desc={
          "The most versatile furniture system ever created. Designed to fit your life, made to move and grow."
        }
      />
      <Story />
      <FeatureMugs />
      <Products />
      <CoffeeMagazine />
      <Parallax />
      <Stories />
      <SubscribeUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

/*
toggle menu, chia component 
*/
export default App;
