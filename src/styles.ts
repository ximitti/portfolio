import styled from 'styled-components';

// ----------------------------------
export const Wrapper = styled.main`
	height: 100vh;
	margin: 0 auto;
	display: grid;
	grid-template-columns: minmax(270px, auto) 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'sidebar main';

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
		grid-template-rows: minmax(70px, auto) 1fr;
		grid-template-areas:
			'sidebar'
			'main';
	}
`;
