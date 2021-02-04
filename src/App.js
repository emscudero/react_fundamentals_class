import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Name from './components/challenges/day01/Name'
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'

function App() { //this is a root component
  const name = 'Emily' //JS above return statement can be
                      // injected into JSX using {}

  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App Component</h2>
      <h3>CHALLENGE!</h3>
      <p>Create ./components/challenges/day 01 folder</p>
      <p>Create a component with h1 tag of your name, p tag with description  of yourself, and an unordered list of two truths and a lie.</p>
      <p>Export, import into App, and mount it.</p>
      <p>Deadline at 8:05pm</p>
      <Header /> {/* this is how you mount a component */}
      <Name />
      <Footer />
      <Home />
    </div>
    
  );
}

export default App;
    