import React from 'react';
import InputNumber from '../../../../components/InputNumber';
import * as Styles from './styles';

function ProductCart(props: any) {
    return (
        <>
            <Styles.ProductContainer>
                <Styles.ProductItems>
                    <Styles.ImgContainer>
                        <img src="https://ak1.ostkcdn.com/images/products/22335238/Womens-Solid-A-Line-Paneled-Detail-Midi-Jersey-Knit-Dress-028a1466-1a85-4a1d-a32e-5512b53eee8c_600.jpg?imwidth=480" alt="product" />
                        <label>Remover</label>
                    </Styles.ImgContainer>

                    <InputNumber />
                </Styles.ProductItems>

                <Styles.ProductPrices>
                    <Styles.ProductPrice>R$ 120,00</Styles.ProductPrice>
                    <label>À VISTA NO BOLETO</label>
                    <label>Ou em até 3x de R$ 30,00</label>
                </Styles.ProductPrices>
            </Styles.ProductContainer>

        </>
    );
}

export default ProductCart;