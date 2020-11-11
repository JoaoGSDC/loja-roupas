import React from 'react';
import InputNumber from '../../components/InputNumber';

import * as Styles from './styles';

function ProductDescription() {
    return (
        <>
            <Styles.ProductDescriptionContainer>
                <Styles.ItemsContainer>
                    <div>
                        <Styles.Img src="https://ak1.ostkcdn.com/images/products/22335238/Womens-Solid-A-Line-Paneled-Detail-Midi-Jersey-Knit-Dress-028a1466-1a85-4a1d-a32e-5512b53eee8c_600.jpg?imwidth=480" alt="product" />
                    </div>
                    <Styles.ValuesContainer>
                        <Styles.ProductTitle>Product Name</Styles.ProductTitle>

                        <Styles.PriceContainer>
                            <Styles.PriceValue>R$ 120,00</Styles.PriceValue>
                            <div>
                                <label>À VISTA NO BOLETO</label>
                                <label>Ou em até 3x de RR$ 30,00</label>
                            </div>
                        </Styles.PriceContainer>
                        <Styles.FieldContainer>
                            <Styles.LabelTitle>Tamanho</Styles.LabelTitle>
                            <select>
                                <option>PP</option>
                                <option>P</option>
                                <option>M</option>
                                <option>G</option>
                                <option>GG</option>
                            </select>
                        </Styles.FieldContainer>
                        <Styles.FieldContainer>
                            <Styles.LabelTitle>Quantidade</Styles.LabelTitle>
                            <InputNumber />
                        </Styles.FieldContainer>
                        <Styles.Button type="button">COMPRAR</Styles.Button>
                    </Styles.ValuesContainer>
                </Styles.ItemsContainer>

                <Styles.DescriptionContainer>
                    <Styles.DescriptionTitleContainer>Descrição</Styles.DescriptionTitleContainer>
                    <Styles.DescriptionTextContainer>
                        <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus tortor, sodales quis varius ut, lobortis ultrices nibh. In leo dui, cursus a ante at, interdum feugiat est. Aenean erat justo, egestas vel ultrices sollicitudin, posuere sed lectus. </label>
                    </Styles.DescriptionTextContainer>
                </Styles.DescriptionContainer>
            </Styles.ProductDescriptionContainer>
        </>
    );
}

export default ProductDescription;