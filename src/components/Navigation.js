import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Link, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import SchedulePickupButton from './SchedulePickupButton';

const StyledNavigationWrapper = styled.div`
  font-size: 1em;
  position: relative;
  
  a:not(:last-child) {
    margin-right: 20px;
  }
`;

const StyledDesktopNavigation = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMobileNavigation = styled.div`
  display: none;

  @media (max-width: 768px) {
      display: block;
  }
`;

const StyledMobileNavigationMenuButton = styled(Button)`
  &.MuiButton-root {
    min-width: unset;
  }

  &.MuiButton-text {
    padding: 6px 0px 6px 8px;
  }
`;

const StyledMenu = withStyles({
    paper: {
        top: '20px !important',
        right: '20px',
        left: 'unset !important', 
    },
})(Menu);

const Navigation = () => {
    const [ mobileNavIsVisibile, setMobileNavIsVisible ] = useState(false);

    const handleMobileNavigationMenuButtonClick = () => setMobileNavIsVisible(true);
    const handleClose = () => setMobileNavIsVisible(false);
  
    return (
      <StyledNavigationWrapper>
        <StyledDesktopNavigation>
            <Link href="#about_us" color="inherit">
              About
            </Link>
            <Link href="#products_we_buy" color="inherit">
              Products We Buy
            </Link>
            <SchedulePickupButton />
        </StyledDesktopNavigation>
        <StyledMobileNavigation>
            <StyledMobileNavigationMenuButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMobileNavigationMenuButtonClick}>
                <MenuIcon />
            </StyledMobileNavigationMenuButton>
            
            <StyledMenu
                id="simple-menu"
                anchorEl={mobileNavIsVisibile}
                keepMounted
                open={mobileNavIsVisibile}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="#products_we_buy" color="inherit">
                        Products We Buy
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link href="#schedule_pick_up" variant="inherit">
                    Schedule Pick-up
                </Link>
                </MenuItem>
            </StyledMenu>
        </StyledMobileNavigation>
      </StyledNavigationWrapper>
    )
  }

  export default Navigation;