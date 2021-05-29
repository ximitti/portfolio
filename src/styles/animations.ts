export const pageVariants = {
	initial: {
		opacity: 0,
		x: '200vw',
	},
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: '-200vw',
	},
};

export const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.5,
};

export const pageStyle = {
	position: 'absolute',
	width: '100vw',
	overflowX: 'hidden',
};
