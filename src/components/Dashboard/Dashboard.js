import React from 'react';

import Navbar from '../Navbar/Navbar';

import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import NewsScreen from '../../Screens/NewsScreen';
import ContactScreen from '../../Screens/ContactScreen';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Dashboard() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route path="/news" component={NewsScreen}/>
          <Route path="/about" component={AboutScreen}/>
          <Route path="/contact" component={ContactScreen}/>
        </Switch>
    </Router>
  )
}

export default Dashboard
