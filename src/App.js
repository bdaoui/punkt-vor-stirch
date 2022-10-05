import './App.css';
import Contact from './components/contact';
import Footer from './components/footer';
import Icons from './components/icons';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Partners from './components/partners';
import Statistics from './components/statistics';
import Team from "./components/team"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Statistics />
      <Team /> 
      {/* <Icons />
      <Contact />
      <Partners />
      <Footer />  */}
    </div>
  );
}

export default App;
