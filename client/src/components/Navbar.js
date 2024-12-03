import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
	const history = useHistory();
	const auth = useContext(AuthContext);

	const logoutHandler = event => {
		event.preventDefault();
		auth.logout();
		history.push('/');
	};

	return (
		<nav>
			<div className='header-wrapper'>
				<span className='header-logo'>Курс Географии</span>
				<ul id='nav-mobile' className='header-links'>
					<li>
						<NavLink to='/create'>Главная</NavLink>
					</li>
					<li>
						<NavLink to='/links'>Навигация</NavLink>
					</li>
					<li>
						<a href='/' onClick={logoutHandler}>
							Выйти
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
