// styles
import { Container } from './styles';

// animation
import * as animation from '../../styles/animations';

// -------------------------------
const Home = () => {
	return (
		<Container
			key='home'
			initial='initial'
			animate='in'
			exit='out'
			variants={animation.pageVariants}
			transition={animation.pageTransition}>
			<div>
				<h1>Alex Schmitt</h1>
				<p>Desenvolvedor full stack</p>
			</div>
		</Container>
	);
};

export default Home;
