// React
import React from 'react';

// react router dom
import { NavLink } from 'react-router-dom';

// icons
import { FaHome, FaUser, FaReact, FaBriefcase } from 'react-icons/fa';

// asserts
import logo from '../../../asserts/logo.svg';

// styles
import { Container } from './styles';

// ------------------------------
const Navbar = () => {
	const [isActive, setIsActive] = React.useState(false);

	const toggleMenu = (event: React.MouseEvent) => {
		setIsActive(!isActive);
	};

	return (
		<Container>
			<div>
				<img src={logo} alt='logo' />
			</div>
			<button onClick={(e: React.MouseEvent) => toggleMenu(e)}>
				Menu <span className={isActive ? 'active' : undefined}></span>
			</button>
			<ul className={isActive ? 'active' : undefined}>
				<li>
					<NavLink
						onClick={(e: React.MouseEvent) => toggleMenu(e)}
						exact
						to='/'
						activeStyle={{
							color: 'var(--blue-color)',
						}}>
						<FaHome />
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={(e: React.MouseEvent) => toggleMenu(e)}
						exact
						to='/about'
						activeStyle={{ color: 'var(--blue-color)' }}>
						<FaUser />
						<span>Sobre</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={(e: React.MouseEvent) => toggleMenu(e)}
						exact
						to='/skills'
						activeStyle={{ color: 'var(--blue-color)' }}>
						<FaReact />
						<span>Tecnologias</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={(e: React.MouseEvent) => toggleMenu(e)}
						exact
						to='/projects'
						activeStyle={{ color: 'var(--blue-color)' }}>
						<FaBriefcase />
						<span>Projetos</span>
					</NavLink>
				</li>
			</ul>
		</Container>
	);
};

export default Navbar;
