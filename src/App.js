import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destinations from './components/pages/Destinations';
import Places from './components/pages/Places';
import SignUp from './components/pages/SignUp';
import Sarajevo from './components/pages/city/Sarajevo';
import Kravice from './components/pages/city/Kravice';
import Banjaluka from './components/pages/city/Banjaluka';
import Mostar from './components/pages/city/Mostar';
import Jajce from './components/pages/city/Jajce';
import Login from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/destinations' component={Destinations} />
          <Route path='/places' component={Places} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/destination/sarajevo' component={Sarajevo}/>
          <Route path='/destination/kravice' component={Kravice}/>
          <Route path='/destination/banjaluka' component={Banjaluka}/>
          <Route path='/destination/mostar' component={Mostar}/>
          <Route path='/destination/Jajce' component={Jajce}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
