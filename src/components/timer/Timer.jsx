import { useEffect } from 'react';
import useTimer from '../../hooks/useTimer';

const Timer = ({ dispatch, isLastQuestion, currentQuestion }) => {
	const { timer, setTimer } = useTimer(10);

	useEffect(() => {
		if (!isLastQuestion && timer === 0) {
			dispatch({ type: 'incorrectAnswer' });
			setTimer(5);
		}
	}, [timer]);

	useEffect(() => {
		setTimer(10);
	}, [currentQuestion]);

	return <h2>{timer}</h2>;
};

export default Timer;
