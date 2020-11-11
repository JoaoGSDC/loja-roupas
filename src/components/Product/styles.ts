import styled from 'styled-components';

export const ProductContainer = styled.div`
    flex: 1;
    margin: 1%;
    height: auto;
    border: 1px solid #e6e6e6;

    img {
        width: 300px;
        padding: 5px;
    }

    svg {
        font-size: 30px;
        padding: 5px 0px 5px 5px;
        border-left: 1px solid #000000;
    }

    @media only screen and (max-width: 600px) {
        margin: 3%;
        height: 200px;

        img {
            width: 135px;
            padding: 5px;
        }
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ProductDetails = styled.div`
    display: flex;
    color: #000000;
    justify-content: center;
    padding: 7px 15px 0 15px;
    border-top: 1px solid #e6e6e6;
    justify-content: space-between;
`;

export const TextDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`

export const ProductTitle = styled.div`
    font-weight: 700;
    
    @media only screen and (max-width: 600px) {
        white-space: nowrap;
        width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`