import React from 'react';
import styled from 'styled-components'
import Header1 from "../components/UI/Header1"
import Button from "../components/UI/Button"
import EquipmentItems from "../assets/Equipment/equipment.json"
import image1 from "../assets/Equipment/image 2.png"
import image2 from "../assets/Equipment/image 3.png"
import image3 from "../assets/Equipment/image 4.png"
import image4 from "../assets/Equipment/image 5.png"
import image5 from "../assets/Equipment/image 6.png"
import image6 from "../assets/Equipment/image 7.png"

const StyledEquipment = styled.div`
	display: flex;
  	flex-direction: column;
  	align-items: center;
`

const EquipItem = styled.div`
	text-align: center;
  	margin-bottom: 50px;
`

const Content = styled.div`

`

const EquipButton = styled(Button)`
	margin: 50px 0;
`

const Equipment = () => {
	const ImageList = [image1, image2, image3, image4, image5, image6];
	
	return (
		<StyledEquipment>
			<Header1>Наше оборудование</Header1>
			<Content>
				{EquipmentItems.equipment.map((elem, id) => (
					<EquipItem key={id}>
						<div style={{textAlign: "left"}}><b>{id + 1}. {elem.name}</b> - {elem.message}</div>
						<div><img src={ImageList[id]} alt=""/></div>
					</EquipItem>
				))}
			</Content>
			<EquipButton>Посмотреть все</EquipButton>
		</StyledEquipment>
	);
};

export default Equipment;