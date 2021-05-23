import React, { useState } from 'react';
import { Container, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
    font-weight: 800 !important;
    border: 1px solid black !important;
    padding: 10px !important;
`;

const StyledListItemText = styled(ListItemText)`
    font-weight: 800 !important;
`;

const StyledContainer = styled(Container)`
    margin-top: 50px;

    p {
        line-height: 2em;
    }
`;

const items = [
    'Accu-chek',
    'One touch',
    'G6 sensors',
    'Nicoderm',
    'Diabetic pump supplies',
    'Alli weight loss aid',
  ]

const ItemsList = () => {
    return (
        <List>
          { items.map(item => <ListItem>{item}</ListItem>) }
        </List>
    )
  }

const ProductsWeBuy = () => {
    const [listIsOpen, setListIsOpen] = useState(false);

    const handleClick = () => setListIsOpen(!listIsOpen);

    return (
        <StyledContainer>
            <h2 id="products_we_buy">Products We Buy</h2>
            <p>Interested in selling other supplies? We've got you covered. Take a look at all the products we buy.</p>
            <List>
                <StyledListItem button onClick={handleClick}>
                    <StyledListItemText primary="See the full list" />
                    {listIsOpen ? <ExpandLess /> : <ExpandMore />}
                </StyledListItem>
            </List>
            <Collapse in={listIsOpen} timeout="auto" unmountOnExit>
                <ItemsList />
            </Collapse>
        </StyledContainer>
    )
}

export default ProductsWeBuy;