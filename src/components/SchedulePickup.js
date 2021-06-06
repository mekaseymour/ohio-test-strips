import React from 'react';
import { Container } from '@material-ui/core';
import SchedulePickupButton from './SchedulePickupButton';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin-top: 50px;
    
    p {
        line-height: 2em;
    }
`;

const StyledParagraph = styled.p`
    margin-bottom: 35px;
`;

const SchedulePickup = () => {
    return (
        <StyledContainer>
            <h2 id="schedule_pick_up">Schedule Pick-up</h2>
            <StyledParagraph>We're here to make selling your test strips for cash easy! Give us a call to schedule pick-up at your preferred location — usually available same-day.</StyledParagraph>
            <SchedulePickupButton />
        </StyledContainer>
    )
}

export default SchedulePickup;