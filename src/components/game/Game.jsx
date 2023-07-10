import { useState } from 'react';
import { v4 } from 'uuid';
import { QUESTIONS } from '../../constants/questions';
import Answer from '../answer/Answer';
import FinalScore from '../final-score/FinalScore';
import { StyledAnswers, StyledCard, StyledQuestion } from './styles';

const Game = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);

	const isLastQuestion = currentQuestion === QUESTIONS.length;

	if (isLastQuestion) {
		return (
			<StyledCard
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<FinalScore userAnswers={userAnswers} />;
			</StyledCard>
		);
	}

	return (
		<StyledCard
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<StyledQuestion>{QUESTIONS[currentQuestion].question}</StyledQuestion>

			<StyledAnswers>
				{QUESTIONS[currentQuestion].options.map((answer, index) => (
					<Answer
						key={v4()}
						index={index}
						saveUserAnswer={() =>
							saveUserAnswer(
								answer,
								currentQuestion,
								setCurrentQuestion,
								userAnswers,
								setUserAnswers
							)
						}
					>
						{answer}
					</Answer>
				))}
			</StyledAnswers>
		</StyledCard>
	);
};

const saveUserAnswer = (
	answer,
	currentQuestion,
	setCurrentQuestion,
	userAnswers,
	setUserAnswers
) => {
	setUserAnswers([...userAnswers, answer]);
	setCurrentQuestion(currentQuestion + 1);
};

export default Game;
