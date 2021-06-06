import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import ProductsWeBuyCarousel from './ProductsWeBuyCarousel'

const StyledContainer = styled(Container)`
    margin-top: 50px;

    p {
        line-height: 2em;
    }
`;

const ProductsWeBuy = () => {
    return (
        <StyledContainer>
            <h2 id="products_we_buy">Products We Buy</h2>
            <p>We buy diabetic test strips and more! Below are some of the products we buy. Give us a call for the full list if you don't see the product you'd like to sell.</p>
            <ProductsWeBuyCarousel />
        </StyledContainer>
    )
}

export default ProductsWeBuy;