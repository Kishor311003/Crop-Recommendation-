import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import Module1 from './Component/Module1';


function App() {
  
  return (
   <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rec" element={<Module1/>}/>
        </Routes>  
    </BrowserRouter>
    </> 
  );
}

export default App;
