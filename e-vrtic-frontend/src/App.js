import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RegisterForm } from './Components/RegisterForm/RegisterForm';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
import { Footer } from './Components/Footer/Footer';
import { Contact } from './Pages/ContactPage/Contact';
import { Vrtici } from './Pages/VrticiPage/Vrtici';
import {ChildRegistration} from './Pages/ChildRegistrationPage/ChildRegistration';
import { Lokacije } from './Components/Lokacije/Lokacije';
import { Zaposleni } from './Components/Zaposleni/Zaposleni';
import { VaspitneGrupe } from './Components/VaspitneGrupe/VaspitneGrupe';

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
          <Route path="/lokacije">
            <Navbar/>
            <Lokacije/>
            <Footer/>
          </Route>
          <Route path="/zaposleni">
            <Navbar/>
            <Zaposleni/>
            <Footer/>
          </Route>
          <Route path="/vaspitne-grupe">
            <Navbar/>
            <VaspitneGrupe/>
            <Footer/>
          </Route>
          <Route  path="/child-registration" >
            <Navbar/>
            <ChildRegistration/>
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
