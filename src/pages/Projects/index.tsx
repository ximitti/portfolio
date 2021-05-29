// styles
import { Container } from './styles';

// animation
import * as animation from '../../styles/animations';

// -------------------------------
const Projects = () => {
	return (
		<Container
			key='projects'
			initial='initial'
			animate='in'
			exit='out'
			variants={animation.pageVariants}
			transition={animation.pageTransition}>
			<h1>Em construção</h1>
		</Container>
	);
};

export default Projects;
