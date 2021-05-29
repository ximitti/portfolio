// react router dom
import { Route, Switch } from 'react-router-dom';

// pages
import * as pages from '../pages';

// --------------------------------------
const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={pages.Home} />
			<Route exact path='/about' component={pages.About} />
			<Route exact path='/skills' component={pages.Skills} />
			<Route exact path='/projects' component={pages.Projects} />
		</Switch>
	);
};

export default Routes;
