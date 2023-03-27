import './App.css';
import './reset.css'
import Header from './components/header/Header';
import Greenmove from './components/greenmove/Greenmove';
import GreenEnergy from './components/greenenergy/GreenEnergy';
import Renewable from './components/renewable/Renewable';
import World from './components/world/World';
import Instuctions from './components/instructoions/Instructions';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Greenmove/>
      <GreenEnergy/>
      <Renewable/>
      <World/>
      <Instuctions/>
      <Form/>
    </div>
  );
}

export default App;
