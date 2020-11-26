import styled from 'styled-components';

export const Container = styled.aside`
    /*
    ** Exemplo de como utilizar um objeto theme
    ** background-color: ${(props) => props.theme.colors.primary};
    */

   background-color: ${(props) => props.theme.colors.background};
   width: 360px;
   height: 100vh;
   overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;




