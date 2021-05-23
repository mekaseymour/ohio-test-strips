import React, { useState } from 'react';
import { Container, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const items = [
    'Accu-chec',
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
        <Container>
            <h2 id="products_we_buy">Products We Buy</h2>
            <p>We will buy a number of products off of you.</p>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="See the full list" />
                    {listIsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Collapse in={listIsOpen} timeout="auto" unmountOnExit>
                <ItemsList />
            </Collapse>
        </Container>
    )
}

export default ProductsWeBuy;