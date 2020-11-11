import React from 'react';
import Product from '../../components/Product';
import Slideshow from '../../components/Slideshow';

import { ClothesDivider, ProductsContainer } from './styles';

function Home() {
    return (
        <>
            <Slideshow />
            <ClothesDivider>Roupas</ClothesDivider>
            <ProductsContainer>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductsContainer>
        </>
    )
}

export default Home;