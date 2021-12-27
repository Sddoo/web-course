import React from 'react';
import styled from 'styled-components'
import Button from "./UI/Button"
import Home from "../assets/home.svg"
import Logo from "../assets/gloss_redacted1.svg";
import Phone from "../assets/phone.svg"
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    height: 148px;
  	position: sticky;
    top: 0;
    left: 0;
`;

const Content = styled.div`
  	height: 100%;
	width: 1240px;
	margin: auto;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;

	@media (max-width: 1300px) {
		width: 900px;
	}
  
  	@media (max-width: 900px) {
		width: 650px;
	  	font-size: 14px;
	}

	@media (max-width: 700px) {
		width: 320px;
      	font-size: 7px;
	}
`

const Contacts = styled.div`
    background-color: white;
    height: 50%;
`;

const ContactNumberWrap = styled.div`
	display: flex;
`

const ContactNumber = styled.div`
	text-align: center;
`

const Number = styled.div`
	font-size: 30px;
  	line-height: 35px;
  	letter-spacing: 0.05em;

	@media (max-width: 700px) {
	  	font-size: 10px;
	  	line-height: 15px;
      	letter-spacing: 0;
	}
`

const Time = styled.div`
	border-radius: 3px;
  	background-color: #008F5A;
  	font-size: 14px;
  	margin-top: 5px;
  	margin-left: 2px;
  	color: white;
  	height: 18px;
  	padding: 2px;
`

const Email = styled.div`

`

const Order = styled.div`
	display: flex;
  	justify-content: center;
  
  	& > * {
	  margin: 0 5px;
    }
`

const Navbar = styled.div`
    background-color: #7D2DFF;
  	width: 100vw;
	height: 50%;
`;

const NavbarItem = styled(Link)`
	cursor: pointer;
  	outline: none;
  	color: white;
  	text-decoration: none;
`

const Header = () => {
    return (
        <StyledHeader>
            <Contacts>
	            <Content style={{marginTop: "9px"}}>
		            <div>
			            <img src={Logo} alt="Лого"/>
				    </div>
		            <ContactNumberWrap>
			            <ContactNumber>
				            <Number>
								+7(925)777-77-77
				            </Number>
				            <Email>
					            info@gloss.com
				            </Email>
			            </ContactNumber>
			            <Time>24/7</Time>
		            </ContactNumberWrap>
		            <Order>
			            <img src={Phone} alt="Звонок"/>
			            <Button>Заказать звонок</Button>
		            </Order>
	            </Content>
            </Contacts>
            <Navbar>
	            <Content>
		            <NavbarItem to="/"><img src={Home} alt="Главная страница"/></NavbarItem>
		            <NavbarItem to="/">Продукция</NavbarItem>
		            <NavbarItem to="/services">Услуги</NavbarItem>
		            <NavbarItem to="/equipment">Наше оборудование</NavbarItem>
		            <NavbarItem to="/information">Информация</NavbarItem>
		            <NavbarItem to="/news">Акции и новости</NavbarItem>
		            <NavbarItem to="/contacts">Контакты</NavbarItem>
		            <NavbarItem to="/" style={{color: "black"}}>Вход</NavbarItem>
	            </Content>
            </Navbar>
        </StyledHeader>
    );
};

export default Header;