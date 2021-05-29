import styled from 'styled-components';

// ----------------------------------
export const Container = styled.section`
	grid-area: main;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: minmax(auto, 400px);
	grid-template-areas:
		'sobre'
		'curriculum';

	padding: 2rem;
	gap: 1rem;
	overflow: hidden;

	.sobre {
		grid-area: sobre;

		padding: 0 0.5rem;
		box-shadow: 0 2px var(--border-color);

		h1 {
			font-size: 3.5rem;
			color: var(--title-color);
			font-weight: 900;
			margin: 0.5rem 0;
		}

		h3 {
			font-size: 2rem;
			color: var(--title-color);
			font-weight: 400;
			margin: 0.5rem 0;
		}

		div {
			line-height: 1.5rem;
		}

		div p {
			color: var(--text-color);
			font-size: 1.1rem;
			margin-bottom: 0.5rem;
		}
	}

	.curriculum {
		grid-area: curriculum;

		display: flex;
		justify-content: space-between;
		gap: 1rem;

		.educacao {
			display: flex;
			flex-flow: column nowrap;
			min-width: 200px;
			width: 100%;

			h3 {
				font-size: 2rem;
				color: var(--title-color);
				font-weight: 700;
				margin: 0.5rem 0;
			}

			div {
				background-color: var(--bg-sidebar);
				border-radius: 0.5rem;
				padding: 0.5rem;
				box-shadow: 0 0 20px var(--border-color);
				border: 1px solid var(--border-color);
				min-height: 250px;
				height: 100%;

				ul {
					line-height: 2rem;
					font-size: 1rem;
					color: var(--text-color);
					font-weight: 600;

					li {
						position: relative;
						padding-left: 1.5rem;
						padding-bottom: 1.5rem;

						h6 {
							font-size: 0.9rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--text-color);
						}

						h4 {
							font-size: 1rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--title-color);
						}

						p {
							font-size: 0.9rem;
							line-height: 1.5rem;
							color: var(--text-color);
						}

						span {
							position: absolute;
							left: 0;
							top: 0;
							height: 1rem;
							width: 1rem;
							background-color: var(--blue-color);
							border-radius: 50%;
						}
					}

					li::before {
						content: '';
						position: absolute;
						top: 0;
						left: 6px;
						width: 2px;
						height: 100%;
						background: var(--blue-color);
						margin-right: 0.5rem;
					}
				}
			}
		}

		.experiencia {
			display: flex;
			flex-flow: column nowrap;
			min-width: 200px;
			width: 100%;

			h3 {
				font-size: 2rem;
				color: var(--title-color);
				font-weight: 700;
				margin: 0.5rem 0;
			}

			div {
				background-color: var(--bg-sidebar);
				border-radius: 0.5rem;
				padding: 0.5rem;
				box-shadow: 0 0 20px var(--border-color);
				border: 1px solid var(--border-color);
				min-height: 250px;
				height: 100%;

				ul {
					line-height: 2rem;
					font-size: 1rem;
					color: var(--text-color);
					font-weight: 600;

					li {
						position: relative;
						padding-left: 1.5rem;
						padding-bottom: 1.5rem;

						h6 {
							font-size: 0.9rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--text-color);
						}

						h4 {
							font-size: 1rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--title-color);
						}

						p {
							font-size: 0.9rem;
							line-height: 1.5rem;
							color: var(--text-color);
						}

						span {
							position: absolute;
							left: 0;
							top: 0;
							height: 1rem;
							width: 1rem;
							background-color: var(--blue-color);
							border-radius: 50%;
						}
					}

					li::before {
						content: '';
						position: absolute;
						top: 0;
						left: 6px;
						width: 2px;
						height: 100%;
						background: var(--blue-color);
						margin-right: 0.5rem;
					}
				}
			}
		}

		div.cursos {
			display: flex;
			flex-flow: column nowrap;
			min-width: 200px;
			width: 100%;

			h3 {
				font-size: 2rem;
				color: var(--title-color);
				font-weight: 700;
				margin: 0.5rem 0;
			}

			div {
				background-color: var(--bg-sidebar);
				border-radius: 0.5rem;
				padding: 0.5rem;
				box-shadow: 0 0 20px var(--border-color);
				border: 1px solid var(--border-color);
				min-height: 250px;
				height: 100%;

				ul {
					line-height: 2rem;
					font-size: 1rem;
					color: var(--text-color);
					font-weight: 600;

					li {
						position: relative;
						padding-left: 1.5rem;
						padding-bottom: 1.5rem;

						h6 {
							font-size: 0.9rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--text-color);
						}

						h4 {
							font-size: 1rem;
							font-weight: 700;
							margin-bottom: 0.5rem;
							color: var(--title-color);
						}

						p {
							font-size: 0.9rem;
							line-height: 1.5rem;
							color: var(--text-color);
						}

						span {
							position: absolute;
							left: 0;
							top: 0;
							height: 1rem;
							width: 1rem;
							background-color: var(--blue-color);
							border-radius: 50%;
						}
					}

					li::before {
						content: '';
						position: absolute;
						top: 0;
						left: 6px;
						width: 2px;
						height: 100%;
						background: var(--blue-color);
						margin-right: 0.5rem;
					}
				}
			}
		}
	}

	@media (max-width: 650px) {
		padding: 1rem;
		overflow-y: auto;

		.curriculum {
			flex-flow: column nowrap;
			justify-content: flex-start;
			align-items: center;
		}
	}
`;
