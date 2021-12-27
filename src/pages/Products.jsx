import React from 'react';
import styled from 'styled-components'
import img1 from "../assets/Products/Rectangle 7.png"
import img2 from "../assets/Products/Rectangle 8.png"
import img3 from "../assets/Products/Rectangle 9.png"
import img4 from "../assets/Products/Rectangle 10.png"
import img5 from "../assets/Products/Rectangle 11.png"
import img6 from "../assets/Products/Rectangle 12.png"
import img7 from "../assets/Products/Rectangle 13.png"
import img8 from "../assets/Products/Rectangle 14.png"
import img9 from "../assets/Products/Rectangle 15.png"
import img10 from "../assets/Products/Rectangle 16.png"
import Header1 from "../components/UI/Header1"
import Button from "../components/UI/Button"

const StyledProducts = styled.div`
  	margin: auto;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
`

const ProductList = styled.div`
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: center;
  	margin-bottom:  54px;
  	gap: 15px;
`

const Product = styled.div`
	width: 196px;
  	height: 145px;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  	cursor: pointer;
`

const ProductIcon = styled.img`

`

const ProductName = styled.div`
	margin-top: 30px;
  	overflow-wrap: break-word;
`

const ViewButton = styled(Button)`
	margin-bottom: 54px;
`

const Products = () => {
	const ProductsList = [
		{id: 1, icon: img1, name: "Визитки"},
		{id: 2, icon: img2, name: "Листовки"},
		{id: 3, icon: img3, name: "Наклейки/Стикеры"},
		{id: 4, icon: img4, name: "Буклеты"},
		{id: 5, icon: img5, name: "Таблички из ПВХ"},
		{id: 6, icon: img6, name: "Плакаты"},
		{id: 7, icon: img7, name: "Брошюры"},
		{id: 8, icon: img8, name: "Календари"},
		{id: 9, icon: img9, name: "Сувенирная продукция"},
		{id: 10, icon: img10, name: "Отчеты"}
	]
	
	return (
		<StyledProducts>
			<Header1>Топ-10 нашей продукции</Header1>
			<ProductList>
				{ProductsList.map((elem) => (
					<Product key={elem.id}>
						<ProductIcon src={elem.icon} alt={elem.name}/>
						<ProductName>{elem.name}</ProductName>
					</Product>
				))}
			</ProductList>
			<ViewButton>Посмотреть все</ViewButton>
		</StyledProducts>
	);
};

export default Products;