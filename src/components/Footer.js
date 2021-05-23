import React from 'react';
import { Container, Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    background-color: #eaeaea;
    width: 100vw;
    margin-top: 50px;
    padding: 20px 10px 40px;
    
    &.MuiContainer-disableGutters {
        padding: 20px 25px 40px; 
    }
`;

const StyledFooterTitle = styled.h5`
    text-transform: uppercase;
`;

const StyledFooterHeader = styled.h4`
    text-transform: uppercase;
    font-weight: 800;
`;

const Footer = () => {
   return (
    <StyledContainer disableGutters maxWidth={false}>
        <Container>
            <StyledFooterHeader>Cash For Test Strips LLC</StyledFooterHeader>
            <StyledFooterTitle>
                Hours
            </StyledFooterTitle>
            <p>7 days a week, around the clock</p>
            <StyledFooterTitle>
                Contact
            </StyledFooterTitle>
            <Link href="tel:6145925756">614.592.5756</Link>
        </Container>
    </StyledContainer>
   )
}

export default Footer;