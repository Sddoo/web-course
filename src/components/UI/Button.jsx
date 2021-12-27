import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 10px;
  	border: 3px solid #E22221;
  	font-size: 18px;
  	height: 50px;
  	width: auto;
  	padding: 12px 20px;
  	background-color: white;
  	color: #E22221;
  	cursor: pointer;

	@media (max-width: 700px) {
		font-size: 12px;
	}
`

const Button = (props) => {
	return (
		<StyledButton className={props.className}>
			{props.children}
		</StyledButton>
	);
};

export default Button;