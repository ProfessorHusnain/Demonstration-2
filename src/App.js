import './App.css';
import Auth from './components/Auth';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import { loginForm,signupForm } from './Data';

function App() {
  return (
    <div className="App">
      <Router>
         
       <Auth {...signupForm}/>
      </Router>
    </div>
  );
}

export default App;
