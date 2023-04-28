import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled(motion.div)`
	width: 90%;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 2rem 2rem;
	background-color: #ffe6c7;
	border-radius: 1rem;
`;

const StyledQuestion = styled.h2`
	padding: 2rem 0;
`;

const StyledAnswers = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export { StyledCard, StyledQuestion, StyledAnswers };
