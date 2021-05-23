import React from 'react';
import { Button, Link } from '@material-ui/core';

const SchedulePickupButton = () => {
    return (
        <Link href="tel:6145925756">
            <Button variant="contained" color="primary" disableElevation>Schedule Pick-up</Button>
        </Link>
    )
}

export default SchedulePickupButton;
