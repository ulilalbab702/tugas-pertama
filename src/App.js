import './App.css';
import JumbotronComponent from './component/JumbotronComponent';
import MenuComponent from './component/MenuComponent';
import NavbarComponent from './component/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <JumbotronComponent/>
      <MenuComponent/>
    </div>
  );
}

export default App;
