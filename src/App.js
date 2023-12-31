import './App.css';
 
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
 
import Auth from './components/Auth';
import { loginForm, signupForm } from './Data';

function App() {
   
  return (
    <div className='App'>

    {/*<Router basename='Demonstration-2'>*/}
    <Router>
    <Routes>
     <Route exact path='/' element={<Auth {...loginForm}/>}></Route>
     <Route  path='/signup' element={<Auth {...signupForm}/>}></Route>
    </Routes>
 </Router>
 </div>
  );
}

export default App;
