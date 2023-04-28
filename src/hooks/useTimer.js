import { useEffect, useState } from 'react';

const useTimer = time => {
	const [timer, setTimer] = useState(time);

	useEffect(() => {
		if (timer === 0) return;
		const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
		return () => clearTimeout(timeoutId);
	}, [timer]);

	return { timer, setTimer };
};

export default useTimer;
