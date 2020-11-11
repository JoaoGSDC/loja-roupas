import styled from 'styled-components';

export const ClothesDivider = styled.div`
    margin: 15px;
    display: flex;
    padding: 15px;
    justify-content: center;
    background-color: #0e0e0e;
    font-size: calc(100% + 5px);

    @media only screen and (max-width: 600px) {
        padding: 5px;
        font-size: auto;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;