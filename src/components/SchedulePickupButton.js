import React from 'react';
import { Button, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
    height: '50px',
    fontWeight: 'bold',
    borderRadius: '50px',
    }
  })(Button);

const SchedulePickupButton = () => {
    return (
        <Link href="tel:6145925756">
            <StyledButton variant="contained" color="primary" disableElevation>Schedule Pick-up</StyledButton>
        </Link>
    )
}

export default SchedulePickupButton;
