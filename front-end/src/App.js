import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Landing from './components/layout/Landing/Landing';
import Footer from './components/layout/Footer/Footer';
import Contact from './components/Contact/Contact';
import Navbar from './components/layout/Navbar/Navbar';



function App() {
  return (
	  <Router>
		  	<div>	
			  {/* <Navbar /> */}
			  <Switch>
			  	<Route exact path="/" component={Landing} />
				<Route exact path="/contact" component={Contact} />
				  {/* <Footer />   */}
				  </Switch>
			</div>		  
	</Router>  

  );
}

export default App;
