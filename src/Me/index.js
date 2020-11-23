import React from 'react';
import styled from 'styled-components';
import Me from './me_prototype.png';

const Wrapper = styled.div`
    /* text-align: right; */
    position: sticky;
    top: 0;
    height: auto;
    overflow: auto;
`;

// const MeImage = styled.image`
//     src: ${Me};
//     alt: "Me in real life";

// `;

export default function Default() {
	return (
		<Wrapper>
			<img style={{ height: 'auto', width: '500px', float: 'right' }} src={Me} alt="Me in real life" />
		</Wrapper>

	);
}
