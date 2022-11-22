
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import './App.css';
import Home from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header/>
      <Home/>
    </>

  );
}

export default App;
