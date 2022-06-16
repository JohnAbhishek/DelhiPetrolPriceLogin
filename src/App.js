import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
