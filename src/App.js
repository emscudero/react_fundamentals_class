import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

function App() { //root component
  const profile = {name: "Emily", age: "24", school: "Kettering High", graduationYear: 2015}
  return (

    <div className="App">
{/*<NameProp name='Emily' />
<Contacts name='Emily' age='24' school='Kettering High' graduationYear="2015" />*/}
  <Contacts {...profile} />
<p>------------------------</p>
<State />
    </div>
  );
}

<NameProp />
export default App;

