import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-100'>
     <Router>
      <div className='flex'>
        <Sidebar/>
        <Home />
        </div>
     </Router>
     
    </div>
  );
}

export default App;
