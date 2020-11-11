import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
    display: flex;
    color: #000000;
    justify-content: center;
    margin-top: 30px;
    padding: 15px 90px 0 90px;

    align-items: center;
    flex-direction: column;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    width: 100%;
    height: 45px;
    color: #ffffff;
    margin-top: 30px;
    background-color: #04D200;
    border: 1px solid #cecece;
    cursor: pointer;
`

export const LabelTitle = styled.label`
    font-weight: bold;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;

    select {
        width: 135px;
    }

    div {
        margin-left: 0px;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;

    div {
        display: flex;
        flex-direction: column;
        color: #b5b5b5;
    }
`

export const PriceValue = styled.label`
    font-size: 24px;
`

export const ProductTitle = styled.label`
    font-size: 24px;
    font-weight: bold;
`

export const Img = styled.img`
    border: 1px solid #b5b5b5;
    margin-right: 30px;
`

export const DescriptionTitleContainer = styled.label`
    border: 1px solid #222222;
    padding: 5px 50px 5px 50px;
    margin-left: 30px;
    border-radius: 3px 3px 0 0;
    font-size: 21px;
    background-color: #222222;
    color: #ffffff;
`

export const DescriptionContainer = styled.div`
    margin-top: 30px;
    width: calc(100% - 180px);
`

export const DescriptionTextContainer = styled.div`
    margin-top: 5px;
    border-top: 1px solid #222222;
    padding: 30px;
`