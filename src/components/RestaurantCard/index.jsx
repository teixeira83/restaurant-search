import React from 'react'
import ReactStars from 'react-rating-stars-component';
import restaurant from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles'
const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c"/>
            <Address>Rua Nova Chegando Logo, 222</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant} alt="Foto do Restaurante" />
    </Restaurant>
)

export default RestaurantCard;