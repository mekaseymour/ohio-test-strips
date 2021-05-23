import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    background-color: #eaeaea;
    width: 100vw;
    padding: 20px 0;
    margin-top: 30px;
`;

const Footer = () => {
   return (
    <StyledContainer disableGutters maxWidth={false}>
        <Container>
            <p>Hours of opertation</p>
            <p>Lil Test Strips LLC</p>
            <p>Contact phone number</p>
            <p>Made with ❤ in Ohio</p>
        </Container>
    </StyledContainer>
   )
}

export default Footer;