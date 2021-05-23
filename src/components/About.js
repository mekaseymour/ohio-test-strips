import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    p {
        line-height: 2em;
    }
`;

const About = () => {
    return (
        <StyledContainer>
            <h2 id="about_us">About</h2>
            <p>Cash 4 Test Strips LLC has been building relationships and paying customers cash for their extra test strips since 2016.</p>
            <p>We look forward to working with you!</p>
        </StyledContainer>
    )
}

export default About;