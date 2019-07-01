import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Landing from './components/layout/Landing/Landing';
import Footer from './components/layout/Footer/Footer';



function App() {
  return (
	  <Router>
			<div>	
				<Route exact path="/" component={Landing} />
				<Footer />  
			</div>		  
	</Router>  

  );
}

export default App;
