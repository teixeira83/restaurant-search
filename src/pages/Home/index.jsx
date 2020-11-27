import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [modalOpened, setModalOpended] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Restaurante" />
                    <TextField 
                        label="Pesquisar Restaurante"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="nome do rest" />
                        <Card photo={restaurante} title="nome do rest" />
                        <Card photo={restaurante} title="nome do rest" />
                        <Card photo={restaurante} title="nome do rest" />
                        <Card photo={restaurante} title="nome do rest" />
                        <Card photo={restaurante} title="nome do rest" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            {/* <Modal open={modalOpened} onClose={() => setModalOpended(!modalOpened)} /> */}
        </Wrapper>
    )
}

export default Home;

