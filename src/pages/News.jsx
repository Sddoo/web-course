import React from 'react';
import styled from 'styled-components'
import Header1 from '../components/UI/Header1'
import Prices from '../assets/Prices.json'

const StyledInformation = styled.div`
	display: flex;
  	flex-direction: column;
  	align-items: center;
`

const InformationTable = styled.table`
  	border: 1px solid black;
  	border-collapse: collapse;
  	text-align: center;
  	width: 100%;

	& > tr, td, th {
	    border: 1px solid black;
	}
`

const OldPrice = styled.div`
	text-decoration: line-through;
`

const Note = styled.div`
	font-size: 16px;
  	line-height: 19px;
  	color: #393636;
  	align-self: flex-start;
  	margin-bottom: 80px;
`

const News = () => {
	return (
		<StyledInformation>
			<Header1>Акции и новости</Header1>
			<InformationTable>
				<tbody>
					<tr>
						<th>Акция 10%</th>
						<th>А3 (30х40)</th>
						<th>А2 (40х53)</th>
						<th>А1 (60х80)</th>
						<th>А0 (80х106)</th>
					</tr>
					{Object.keys(Prices).map((elem, id) => (
						<tr key={id}>
							<td>{elem}</td>
							<td>
								<OldPrice>{Prices[elem][0].old}</OldPrice>
								<div>{Prices[elem][0].new}</div>
							</td>
							<td>
								<OldPrice>{Prices[elem][1].old}</OldPrice>
								<div>{Prices[elem][1].new}</div>
							</td>
							<td>
								<OldPrice>{Prices[elem][2].old}</OldPrice>
								<div>{Prices[elem][2].new}</div>
							</td>
							<td>
								<OldPrice>{Prices[elem][3].old}</OldPrice>
								<div>{Prices[elem][3].new}</div>
							</td>
						</tr>
					))}
				</tbody>
			</InformationTable>
			<Note>* Cкидка 10% на весь ассортимент продукции до 22 декабря 2021 года</Note>
		</StyledInformation>
	);
};

export default News;