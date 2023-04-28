const gameReducer = (gameState, { type, payload }) => {
	switch (type) {
		case 'correctAnswer':
			return {
				...gameState,
				currentQuestion: gameState.currentQuestion + 1,
				correctAnswers: gameState.correctAnswers + 1,
				userAnswers: [...gameState.userAnswers, payload]
			};
		case 'incorrectAnswer':
			return {
				...gameState,
				currentQuestion: gameState.currentQuestion + 1,
				userAnswers: [...gameState.userAnswers, payload]
			};

		case 'finishGame':
			return {
				...gameState,
				isLastQuestion: true
			};

		default:
			throw new Error('INVALID ACTION');
	}
};

export default gameReducer;
