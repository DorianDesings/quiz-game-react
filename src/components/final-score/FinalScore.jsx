import { motion } from 'framer-motion';
import { QUESTIONS } from '../../constants/questions';
import { StyledCorrect, StyledIncorrect } from './styles';

const FinalScore = ({ userAnswers }) => {
	return (
		<>
			<h2>FINAL RESULT</h2>

			<div>
				{QUESTIONS.map((question, index) => (
					<motion.div key={question.id}>
						<motion.p
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: (index + 3) * 0.1 }}
						>
							{question.question}
						</motion.p>
						<motion.p
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: (index + 5) * 0.3 }}
						>
							{compareAnswers(question.correctAnswer, userAnswers[index])}
						</motion.p>
					</motion.div>
				))}
			</div>
		</>
	);
};

const compareAnswers = (correctAnswer, userAnswer) => {
	if (correctAnswer === userAnswer) {
		return (
			<span>
				<span>{correctAnswer}</span> -
				<StyledCorrect> {userAnswer}</StyledCorrect>
			</span>
		);
	} else {
		return (
			<span>
				<span>{correctAnswer}</span> -
				<StyledIncorrect> {userAnswer}</StyledIncorrect>
			</span>
		);
	}
};

export default FinalScore;
