import './App.css';
import './reset.css'
import Header from './components/header/Header';
import Greenmove from './components/greenmove/Greenmove';
import GreenEnergy from './components/greenenergy/GreenEnergy';
import Renewable from './components/renewable/Renewable';
import World from './components/world/World';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Greenmove/>
      <GreenEnergy/>
      <Renewable/>
      <World/>
    </div>
  );
}

export default App;
