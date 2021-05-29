import styled from 'styled-components';

// ----------------------------------
export const Wrapper = styled.main`
	height: 100vh;
	position: relative;
	overflow: hidden;
	width: 100%;
	display: grid;
	grid-template-columns: minmax(300px, auto) 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'sidebar main';

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
		grid-template-rows: 70px 1fr;
		grid-template-areas:
			'sidebar'
			'main';
	}
`;
