import { relative } from 'path';
import React from 'react';
import ProductCart from './components/ProductCart';
import * as Styles from './styles';

function Cart() {
    return (
        <>
            <Styles.CartContainer>

                <div></div>

                <Styles.ProductCartContainer>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                    <ProductCart></ProductCart>
                </Styles.ProductCartContainer>

                <div style={{position: 'relative'}}>
                    <div style={{position: 'sticky', top: '95px'}}>
                        <Styles.ValorContainer>
                            <div>
                                <Styles.TitleValor><label><div>$</div> Valor</label></Styles.TitleValor>
                                <Styles.PriceTotalContainer>
                                    <Styles.PriceTotalText>
                                        <label>Frete: </label>
                                        <label>Total: </label>
                                    </Styles.PriceTotalText>

                                    <Styles.PriceTotalText>
                                        <label>R$ 15,00 </label>
                                        <label>R$ 135,00 </label>
                                    </Styles.PriceTotalText>
                                </Styles.PriceTotalContainer>
                            </div>

                            <Styles.FretContainer>
                                <div>
                                    <input type="checkbox" />
                                    <label>Sedex</label>
                                </div>

                                <div>
                                    <label>R$ 15,00</label>
                                </div>
                            </Styles.FretContainer>

                            <Styles.ButtonContainer>
                                <button>Finalizar Compra</button>
                            </Styles.ButtonContainer>
                        </Styles.ValorContainer>
                    </div>
                </div>

            </Styles.CartContainer>
        </>
    );
}

export default Cart;