// styles
import { Wrapper } from './styles';

// components
import Navbar from './components/molecules/Navbar';
import Routes from './routes';

// -----------------------
const App = () => {
	return (
		<Wrapper>
			<Navbar />
			<Routes />
		</Wrapper>
	);
};

export default App;
