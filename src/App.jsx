import logo from './logo.svg';
import './App.css';
import Button from './components/ButtonComponent';
import Header from './Header';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
     <Header logo={logo}  />
     <Button buttonText="Scopri di più" />
     <ImageComponent style ={{width:700}} src= "https://cdn.motor1.com/images/mgl/pOAWo/s1/2020-bmw-x6.jpg" />
    </div>

  );

}

export default App;
 