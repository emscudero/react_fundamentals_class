
import './App.css';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
/*import MortyParent from './components/Morty/MortyParent'*/
import ChuckNorris from './components/challenges/day04/ChuckNorris';


function App() { //this is a root component
  

  return (
    <div>
     {/*<MortyParent />*/}
     <ChuckNorris />
    </div>
    
  );
}

export default App;
    