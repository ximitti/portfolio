// styles
import { Wrapper } from './styles/styles';
import GlobalStyles from './styles/global';

// motion
import { AnimatePresence } from 'framer-motion';
// components
import Navbar from './components/molecules/Navbar';
import Routes from './routes';

// -----------------------
const App = () => {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<Routes />
				</AnimatePresence>
			</Wrapper>
		</>
	);
};

export default App;
