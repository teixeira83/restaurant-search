import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search } from './styles';
import TextField, { Input } from '@material/react-text-field';

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <Container>
            <Search>
                <img src={logo} alt="Logo do Restaurante"></img>
                <TextField 
                    label="Pesquisar"
                    outlined
                >
                    <Input 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </TextField>
            </Search>
        </Container>
    )
}

export default Home;

