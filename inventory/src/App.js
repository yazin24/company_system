import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Add from './components/Add';

function App() {
  return (
    <div className='b'>
      <Router>
        <div className='components'>
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/add' element={<Add />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
