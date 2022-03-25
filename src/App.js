import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import HomeContainer from './containers/HomeContainer';
import SecondPage from './containers/SecondPage';


function App() {

  return (
    <Router>
      <div className="App">
        <h1 className="mt-3">Bienvenido</h1>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/cart/callback' element={<SecondPage />} />

          </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
