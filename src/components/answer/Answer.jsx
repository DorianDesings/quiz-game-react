import StyledAnswer from './styles';

const Answer = ({ checkCorrectAnswer, index, children }) => {
	return (
		<StyledAnswer
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
			onClick={() => checkCorrectAnswer(children)}
		>
			{children}
		</StyledAnswer>
	);
};

export default Answer;
