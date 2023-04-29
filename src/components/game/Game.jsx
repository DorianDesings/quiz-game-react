import { useReducer } from 'react';
import { v4 } from 'uuid';
import { QUESTIONS } from '../../constants/questions';
import Answer from '../answer/Answer';
import FinalScore from '../final-score/FinalScore';
import gameReducer from '../reducers/game-reducer';
import { StyledAnswers, StyledCard, StyledQuestion } from './styles';

const Game = () => {
	const [gameState, dispatch] = useReducer(gameReducer, {
		currentQuestion: 0,
		correctAnswers: 0,
		userAnswers: []
	});

	const isLastQuestion = gameState.currentQuestion === QUESTIONS.length;

	return (
		<StyledCard
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			{isLastQuestion && <FinalScore gameState={gameState} />}

			{!isLastQuestion && (
				<>
					{/* <Timer
						dispatch={dispatch}
						currentQuestion={gameState.currentQuestion}
						isLastQuestion={isLastQuestion}
					/> */}

					<StyledQuestion>
						{QUESTIONS[gameState.currentQuestion].question}
					</StyledQuestion>

					<StyledAnswers>
						{QUESTIONS[gameState.currentQuestion].options.map(
							(answer, index) => (
								<Answer
									key={v4()}
									index={index}
									checkCorrectAnswer={() =>
										checkCorrectAnswer(gameState, answer, dispatch)
									}
								>
									{answer}
								</Answer>
							)
						)}
					</StyledAnswers>
				</>
			)}
		</StyledCard>
	);
};

const checkCorrectAnswer = (gameState, answer, dispatch) => {
	if (
		answer.toLowerCase() !==
		QUESTIONS[gameState.currentQuestion].correctAnswer.toLowerCase()
	) {
		dispatch({ type: 'incorrectAnswer', payload: answer });
	} else {
		dispatch({ type: 'correctAnswer', payload: answer });
	}
};

export default Game;
