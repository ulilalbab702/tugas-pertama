import './App.css';
import JumbotronComponent from './component/JumbotronComponent';
import MapComponent from './component/MapComponent';
import MenuComponent from './component/MenuComponent';
import NavbarComponent from './component/NavbarComponent';
import NewsComponent from './component/NewsComponent';
import VideoComponent from './component/VideoComponent';
import FooterComponent from './component/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <JumbotronComponent/>
      <MenuComponent/>
      <VideoComponent/>
      <NewsComponent/>
      <MapComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
