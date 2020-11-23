import React from 'react';
import styled from 'styled-components';
import { Services, Projects, About } from '../Sections';

const Wrapper = styled.div`
    color: #e8e6e6;
`;

export default function Default() {
	return (
		<Wrapper>

			<Services />
			<Projects />
			<About />

			{/* Shortcuts "Just jump to what you want to see" */}
			{/* Services offered */}
			{/* Projects */}
			{/* About section: education, work experience, goals, free time stuff */}
			{/* Get in touch / contact me */}
		</Wrapper>
	);
}
