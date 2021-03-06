import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserAccount from './pages/UserAccount';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/user-account' component={UserAccount} />
          <Route path='/login' component={Login} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
