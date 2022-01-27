import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Focus from './components/Focus';
import Counter from './components/Counter';
import Effect from './components/Effect';
import ConnexionBackend from './pages/ConnexionBackend';

import './App.css';


const App = () => {

  
  return (
    <div  className='app'>
      <Router>
        <nav>
          <Link to="/">Home &nbsp;</Link>
          <Link to="/about">À propos &nbsp;</Link>
          <Link to="/focus">Focus &nbsp;</Link>
          <Link to="/counter">Counter &nbsp;</Link>
          <Link to="/effect">Effect &nbsp;</Link>
          <Link to="/backend">Backend &nbsp;</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/focus" element={<Focus/>} />
          <Route path="/counter" element={<Counter initialCount={0} />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/backend" element={<ConnexionBackend />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
