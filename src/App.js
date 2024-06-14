import logo from './logo.svg';
import './App.css';
import './navbar.css'; 
import './data.css';
import Navbar from './navbar';
import Data from './data';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
<>
<Router>
<Navbar/>
  <Routes>
    <Route path='/Business' element={<Data category='Business'/>} />
    <Route path='/Entertainment' element={<Data category='Entertainment'/>}/>
    <Route path='/General' element={<Data category='General'/>}/>
    <Route path='/Health' element={<Data category='Health'/>}/>
    <Route path='/Science' element={<Data category='Science'/>}/>
    <Route path='/Sports' element={<Data category='Sports'/>}/>
    <Route path='/Technology' element={<Data category='Technology'/>}/>
  </Routes>
</Router>


</>

   );
}

export default App;
