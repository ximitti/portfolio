// styled components
import styled from 'styled-components';

// -----------------------------------
export const Container = styled.nav`
	box-sizing: border-box;
	background-color: var(--bg-sidebar);
	display: flex;
	flex-flow: column nowrap;
	justify-content: start;
	border-right: 1px solid var(--border-color);
	align-items: center;
	grid-area: sidebar;

	div {
		margin: 1rem 0.5rem;
		width: 90%;
		height: 25rem;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			height: 12rem;
		}
	}

	button {
		display: none;
	}

	ul {
		display: flex;
		flex-flow: column nowrap;
		width: 90%;
		margin: 0.5rem 0.5rem;
		padding: 0.5rem;

		li {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid var(--border-color);
			padding: 0.5rem 1rem;
			font-size: 1.5rem;
			font-weight: 600;
			line-height: 3rem;
			-webkit-transition: all 0.3s ease;
			transition: all 0.3s ease;

			a {
				color: var(--title-color);
				text-decoration: none;
			}

			span {
				margin-left: 1rem;
			}

			&:hover {
				padding-left: 0.75rem;

				a {
					color: var(--blue-color);
				}
			}
		}
	}

	@media (max-width: 650px) {
		border-bottom: 1px solid var(--border-color);
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;

		div {
			margin: 0;
			height: 70px;
			width: 90%;
			justify-content: start;

			img {
				height: 65px;
			}
		}

		ul {
			display: block;
			position: absolute;
			width: 100%;
			height: 0;
			top: 70px;
			right: 0;
			background-color: var(--bg-sidebar);
			margin: 0;
			padding: 0;
			z-index: 100;
			transition: 0.5s;
			visibility: hidden;
			overflow-y: hidden;
		}

		ul.active {
			height: calc(100vh - 70px);
			visibility: visible;
		}

		button {
			display: flex;
			align-items: center;
			padding: 0.5rem 1rem;
			font-size: 1.2rem;
			border: none;
			background: none;
			cursor: pointer;
			gap: 0.5rem;

			span {
				display: block;
				width: 20px;
				border-top: 2px solid;

				&::after,
				&::before {
					content: '';
					display: block;
					width: 20px;
					height: 2px;
					background-color: currentColor;
					margin-top: 5px;
					transition: 0.3s;
					position: relative;
				}

				&.active {
					border-top-color: transparent;
				}

				&.active::before {
					transform: rotate(135deg);
				}

				&.active::after {
					transform: rotate(-135deg);
					top: -7px;
				}
			}
		}
	}
`;
