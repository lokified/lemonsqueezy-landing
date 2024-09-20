import "./App.css";
import { About } from "./components/About";
import { Community } from "./components/Community";
import { Developers } from "./components/Developers";
import { Ecommerce } from "./components/Ecommerce";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marketing } from "./components/Marketing";
import { NavBar } from "./components/NavBar";
import { Reporting } from "./components/Reporting";
import { Support } from "./components/Support";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Ecommerce />
      <Marketing />
      <Reporting />
      <Developers />
      <Community />
      <Support />
      <Footer />
    </>
  );
}

export default App;
