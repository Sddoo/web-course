import React from 'react';
import styled from 'styled-components'

const StyledHeader1 = styled.h1`
	padding-bottom: 41px;
  	padding-top: 50px;
  	margin: 0;
	color: black;
`

const Header1 = (props) => {
	return (
		<StyledHeader1 className={props.className}>
			{props.children}
		</StyledHeader1>
	);
};

export default Header1;