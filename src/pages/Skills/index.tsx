// images
import * as logo from '../../asserts';

// styles
import { Container } from './styles';

// -------------------------------
const Skills = () => {
	return (
		<Container>
			<section className='stacks'>
				<h1>Principais Stacks</h1>
			</section>

			<section className='techs'>
				<ul>
					<li>
						<img src={logo.html} alt='HTML 5' />
					</li>
					<li>
						<img src={logo.css} alt='CSS 3' />
					</li>
					<li>
						<img src={logo.js} alt='JavaScript' />
					</li>
					<li>
						<img src={logo.react} alt='React' />
					</li>
					<li>
						<img src={logo.redux} alt='Redux' />
					</li>
					<li>
						<img src={logo.ts} alt='TypeScript' />
					</li>
					<li>
						<img src={logo.python} alt='Python' />
					</li>
					<li>
						<img src={logo.flask} alt='Flask' />
					</li>
					<li>
						<img src={logo.postgres} alt='PostgreSQL' />
					</li>
				</ul>
			</section>
		</Container>
	);
};

export default Skills;
