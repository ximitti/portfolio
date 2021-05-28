// styles
import { Wrapper } from './styles/styles';
import GlobalStyles from './styles/global';

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
				<Routes />
			</Wrapper>
		</>
	);
};

export default App;
