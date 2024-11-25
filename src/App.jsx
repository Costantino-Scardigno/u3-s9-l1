import logo from './logo.svg';
import './App.css';
import Button from './components/ButtonComponent';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header logo={logo}  />
     <Button buttonText="Scopri di più" />
    </div>

  );

}

export default App;
 