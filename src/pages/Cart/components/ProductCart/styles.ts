import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    color: #000000;
    justify-content: space-between;
    border: 1px solid #b0b0b0;
    padding: 10px 30px 10px 30px;
    margin: 15px;
    align-items: center;
`;

export const ProductItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    color: #bdbdbd;

    img {
        width: 110px;
    }

    label {
        margin-top: 10px;
        transition: 0.15s;

        &:hover {
            cursor: pointer;
            color: #222222;
        }
    }
`

export const ProductDetails = styled.label`
    margin-left: 25px;

    label {
        font-size: 24px;
    }

    div {
        margin-top: 10px;
    }

    button {
        height: 30px;
        width: 30px;
        color: #ffffff;
        background: #222222;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    input {
        height: 24px;
        text-align: center;
    }
`

export const ProductPrices = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;

    label {
        color: #bdbdbd;
        font-size: 14px;
    }
`

export const ProductPrice = styled.label`
    font-size: 30px !important;
    color: #000000 !important;
`