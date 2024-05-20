import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Newsletter from './components/Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarTop from './components/Navbar';
import DBFighterz from './components/DBFighterz';
import Deliverance from './components/Deliverance';
import YoutubeEmbed from './components/YoutubeEmbed';


function App() {
  return (
    <div className="App">
      <Header />
      <NavbarTop />
      <Hero />
      <DBFighterz title="Dragon Ball FighterZ" rating="9/10 Steam ">
      </DBFighterz>
      <YoutubeEmbed embedId='n5rMnfqL5Os' />
      <Deliverance title="Dragon Ball Deliverance" description="Dragon Ball Deliverance is a fan made series following the story of the lives of our favourite Z Fighters beyond the events of GT.">
      </Deliverance>
      <YoutubeEmbed embedId='Hoc0j1k3Wvc' />
      <Newsletter />

    </div>
  );
}

export default App;
