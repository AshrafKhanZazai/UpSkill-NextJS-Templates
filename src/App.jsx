import Bug from "./components/Bug";
import BusinessSite from "./components/BusinessSite";
import Cards from "./components/Cards";
import Continer from "./components/Continer";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Prising from "./components/Prising";
import Users from "./components/User";
import Video from "./components/Video";

export default function App() {
  return (
    <>
    <div className="grid justify-around"> 
   <Navbar />
   <Hero />
   <Featured/>
   <Video/>
   <BusinessSite />
   <Bug />
   <Users />
   <Prising />
   <Cards />
   <Footer />
    </div>
    </>
  );
}