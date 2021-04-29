import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Delete  from './pages/Delete';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <h1>instagram assessment</h1>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/delete' component={Delete} />
          <Route path='/login' component={Login} />
          <Route path='/Logout' component={Logout} />
          <Route path='/error' component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
