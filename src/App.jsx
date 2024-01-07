
import { Route,Routes } from 'react-router-dom';
import './App.css';
import AllRest from './components/AllRest';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

function App() {
  return (
    <div className="App">
     <header>
      <Header/>
     </header>
     <section>
      <Routes>
        <Route path='/' element={<AllRest/>}/>
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
     </section>
     <footer>
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
