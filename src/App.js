import logo from './logo.svg';
import './App.css';
import  Greet  from './functional';
import Welcome from './ClassComp'
import Message from './state';
import State from './functionstate';
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
