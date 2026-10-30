import Navbar from "./comapnents/Navbar";
import Comments from "./pages/Comments";
import Covered from "./pages/Covered";
import Dreams from "./pages/Dreams";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Properties from "./pages/Properties";
import Rectangle from "./pages/Rectangle";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Rectangle />
      <Services />
      <News />
      <Comments />
      <Covered />
      <Properties />
      <Dreams />
      <Footer />
    </div>
  );
}

export default App;
