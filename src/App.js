import React from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<main className='container'>
				<NavBar />
				<Switch>
					<Route path='/movies/new' component={MovieForm} />
					<Route path='/movies/:id' component={MovieForm} />
					<Route path='/movies' component={Movies} />
					<Route path='/login' component={LoginForm} />
					<Route path='/register' component={RegisterForm} />
					<Route path='/rentals' component={Rentals} />
					<Route path='/customers' component={Customers} />
					<Route path='/notfound' component={NotFound} />
					<Redirect from='/' exact to='movies' />
					<Redirect to='/notfound' />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
