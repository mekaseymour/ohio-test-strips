import React from 'react';
import { Container, Link } from '@material-ui/core';
import styled from 'styled-components';
import FacebookLogo from '../assets/images/facebook-logo.png';

const StyledContainer = styled(Container)`
    margin-top: 50px;
    display: flex !important;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    border: solid black 1px;
    max-width: 400px;
    width: 100%;
`;

const StyledImg = styled.img`
    width: 20px;
`;

const StyledImgWrapper = styled.div`
    padding: 10px 20px;
    border-right-color: black;
    border-right-width: 1px;
    border-right-style: solid;
`;

const StyledTextContainer = styled.div`
    margin: 0 20px;
    display: flex;
    justify-content: center;
    color: black;
    width: 100%;
`;

const LikeAndReviewOnFacebook = () => {
    return (
        <Container>
            <StyledContainer>
                <StyledLink href="https://www.facebook.com/SellDiabeticTestStripsColumbusOhio/">
                    <StyledImgWrapper><StyledImg src={FacebookLogo} /></StyledImgWrapper>
                    <StyledTextContainer>Like & review on Facebook</StyledTextContainer>
                </StyledLink>
            </StyledContainer>
        </Container>
    )
}

export default LikeAndReviewOnFacebook;