
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import FloatBtn from './Components/Home/FloatBtn';


import './App.scss'
import Design from './Components/Home/Design';

function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a' element={<Design />} />
      </Routes>
      <FloatBtn />
    </Router>
  );
}

export default App;
