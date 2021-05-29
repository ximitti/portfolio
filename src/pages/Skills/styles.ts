import styled from 'styled-components';

// ----------------------------------
export const Container = styled.section`
	grid-area: main;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: minmax(auto, 150px) 1fr;
	grid-template-areas:
		'stacks'
		'techs';

	padding: 2rem;

	.stacks {
		grid-area: stacks;

		padding: 0 0.5rem;

		h1 {
			font-size: 3.5rem;
			color: var(--title-color);
			font-weight: 900;
			margin: 0.5rem 0;
		}
	}

	.techs {
		grid-area: techs;

		ul {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			padding: 1rem;
			gap: 2rem;
			place-items: center;

			li {
				/* box-shadow: 0 0 15px 5px #888; */
				padding: 0.5rem;
				text-align: center;

				img {
					max-width: 200px;
					max-height: 200px;
					width: 95%;
				}
			}
		}
	}

	@media (max-width: 650px) {
		padding: 1rem;
		overflow-y: auto;

		.stacks {
			h1 {
				font-size: 2.5rem;
				margin-bottom: 1.5rem;
			}
		}

		.techs {
			ul {
				grid-template-columns: 1fr;
			}
		}
	}
`;
