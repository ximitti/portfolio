import styled from 'styled-components';

// motion
import { motion } from 'framer-motion';

// ----------------------------------
export const Container = styled(motion.section)`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: main;

	div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		text-align: center;

		h1 {
			font-size: 4rem;
			color: var(--title-color);
			font-weight: 900;
			margin: 0.5rem;
		}

		p {
			font-size: 2rem;
			color: var(--title-color);
			font-weight: 400;
			margin: 0.5rem;
		}

		@media (max-width: 650px) {
			h1 {
				font-size: 3.5rem;
			}

			p {
				font-size: 1.5rem;
			}
		}
	}
`;
