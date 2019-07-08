import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
			<Link to='/' className='navbar-brand'>
				Vidly
			</Link>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item nav-link'>
					<NavLink to='/movies' className='nav-link'>
						Movies
					</NavLink>
				</li>
				<li className='nav-item nav-link'>
					<NavLink to='/customers' className='nav-link'>
						Customers
					</NavLink>
				</li>
				<li className='nav-item nav-link'>
					<NavLink to='/rentals' className='nav-link'>
						Rentals
					</NavLink>
				</li>
				<li className='nav-item nav-link'>
					<NavLink to='/login' className='nav-link'>
						Login
					</NavLink>
				</li>
				<li className='nav-item nav-link'>
					<NavLink to='/register' className='nav-link'>
						Register
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
