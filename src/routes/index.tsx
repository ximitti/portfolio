// react router dom
import { Route, Switch } from 'react-router-dom';

// pages
import { Home, About, Skills, Projects } from '../pages';

// --------------------------------------
const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/skills' component={Skills} />
			<Route exact path='/projects' component={Projects} />
		</Switch>
	);
};

export default Routes;
