import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import UserAccount from './pages/UserAccount';
import Signup from './pages/Signup';
import Delete  from './pages/Delete';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user-account' component={UserAccount} />
          <Route path='/signup' component={Signup} />
          <Route path='/delete' component={Delete} />
          <Route path='/login' component={Login} />
          <Route path='/Logout' component={Logout} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
