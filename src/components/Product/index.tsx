import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { ProductContainer, ProductDetails, TextDetails, ImgContainer, ProductTitle } from './styles';

function Product(props: any) {
    return (
        <>
            <ProductContainer>
                <ImgContainer>
                    <img src="https://ak1.ostkcdn.com/images/products/22335238/Womens-Solid-A-Line-Paneled-Detail-Midi-Jersey-Knit-Dress-028a1466-1a85-4a1d-a32e-5512b53eee8c_600.jpg?imwidth=480" alt="product" />
                </ImgContainer>
                <ProductDetails>
                    <TextDetails>
                        <ProductTitle><label>Vestido azul canela</label></ProductTitle>
                        <label>R$ 120,00</label>
                    </TextDetails>
                    <div>
                        <FiChevronRight />
                    </div>
                </ProductDetails>
            </ProductContainer>
        </>
    );
}

export default Product;