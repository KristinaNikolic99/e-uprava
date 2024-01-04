import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RegisterForm } from './Components/RegisterForm/RegisterForm';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
import { Footer } from './Components/Footer/Footer';
import { Contact } from './Pages/ContactPage/Contact';
import { Vrtici } from './Pages/VrticiPage/Vrtici';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route path="/register">
            <RegisterForm/>
          </Route>
          <Route path="/contact-us">
            <Navbar/>
            <Contact/>
            <Footer/>
          </Route>
          <Route  path="/vrtici">
            <Navbar/>
            <Vrtici/>
            <Footer/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="/" >
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>
          
        </Switch>
        
        
      </div>
    </Router>
    
  );
}

export default App;
