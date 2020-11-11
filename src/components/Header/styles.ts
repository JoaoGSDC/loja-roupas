import styled from 'styled-components';

export const Nav = styled.nav`
    top: 0;
    height: 80px;
    width: 100%;
    display: flex;
    color: #ffffff;
    position: sticky;
    align-items: center;
    background-color: #0e0e0e;
    justify-content: space-around;

    svg {
        transition: 0.2s;

        &:hover {
            color: rgba(255, 255, 255, 0.75);
            cursor: pointer;
        }
    }

    label {
        font-size: 24px;
        margin: 0 120px 0 120px;
    }

    button {
        border: none;
        color: #ffffff;
        background: transparent;
    }

    @media only screen and (max-width: 600px) {
        label {
            margin: 0 75px 0 75px;
        }
    }
`;

export const Sidebar = styled.div`
    top: 0px;
    left: 0px;
    height: 100%;
    width: 250px;
    position: fixed;
    background: #0e0e0e;
    transition: 0.2s;
    padding: 50px 0 0 0;
    text-align: center;
`

export const UserIcon = styled.div`
    background-color: #ffffff;
    color: #222222;
    border-radius: 50px;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 10px;    
`

export const OptionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0 15px 0;
    border-bottom: 1px solid #222222;
`

export const SubOptionsBar = styled.div`
    div {
        background-color: #222222;
        padding: 10px 0 10px 0;
        border-bottom: 1px solid #3e3e3e;
        transition: 0.2s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
    }
`