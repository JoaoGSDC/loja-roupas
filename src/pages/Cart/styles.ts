import styled from 'styled-components';

export const CartContainer = styled.div`
    color: #000000;
    display: flex;
`

export const ProductCartContainer = styled.div `
    width: 100%;
`

export const ValorContainer = styled.div`
    width: 350px;
    height: 455px;
    margin: 15px;
    padding: 20px;
    position: relative;
    border: 1px solid #b0b0b0;
`

export const TitleValor = styled.div`
    display: flex;
    justify-content: center;

    label {
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 24px;
    }

    div {
        background-color: #222222;
        border-radius: 50px;
        width: 25px;
        height: 25px;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        display: flex;
        margin-right: 10px;
    }
`

export const PriceTotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    font-size: 21px;
    padding-bottom: 40px;
    border-bottom: 1px solid #bdbdbd;
`

export const PriceTotalText = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-top: 10px;
    }
`

export const FretContainer = styled.div`
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 15px;
    width: calc(100% - 40px);

    button {
        width: 100%;
        border: none;
        height: 35px;
        color: #ffffff;
        background-color: #222222;
    }
`