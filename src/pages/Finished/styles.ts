import styled from 'styled-components';

export const FinishedContainer = styled.div`
    color: #000000;
    display: flex;
    padding: 30px 120px 0px 120px;

    display: flex;
    justify-content: space-around;

    button {
        width: 100%;
        height: 45px;
        color: #ffffff;
        margin-top: 15px;
        background-color: #0e0e0e;
        border: 1px solid #222222;
    }

    input {
        height: 30px;
        margin-bottom: 10px;
    }

    select {
        height: 35px;
        margin-bottom: 10px;
    }
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: bold;
`

export const Title = styled.label`
    font-size: 24px;
`

export const PersonalField = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 120px 0px 0px;
`