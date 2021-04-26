import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen/AboutScreen';
import NewsScreen from '../../Screens/NewsScreen/NewsScreen';
import ContactScreen from '../../Screens/ContactScreen/ContactScreen';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MobileNavbar from '../Navbar/MobileNavbar/MobileNavbar';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../Navbar/responsive';

function Dashboard() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet})
  return (
    <>
      <Router>
        {isMobile ? <MobileNavbar/> :
        <Navbar/>}
          <Switch>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/about" component={AboutScreen}/>
            <Route path="/news" component={NewsScreen}/>
            <Route path="/contact" component={ContactScreen}/>
          </Switch>
      </Router>
      <Footer/>
    </>
  )
}

export default Dashboard