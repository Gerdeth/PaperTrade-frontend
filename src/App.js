import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Browse from "./Pages/Browse";
import MyPortfolio from "./Pages/MyPortfolio";






function App () {
	
	return (
		<div className="App">
			<Router>
				<Navigation/>
				
				{/* <Favorites/> */}
				<Switch>
					<Route path="/" exact component={()=><Home/>}/>
					<Route path="/home" exact component={()=><Home/>}/>
					<Route path="/login" exact component={()=><LogIn/>}/>
					<Route path="/signup" exact component={()=><SignUp/>}/>
					<Route path="/browse" exact component={()=><Browse/>}/>
					<Route path="/myportfolio" exact component={()=><MyPortfolio/>}/>
				</Switch>
			</Router>
    	</div>
	);
}
export default App;