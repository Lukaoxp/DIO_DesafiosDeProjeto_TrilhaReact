import styled from 'styled-components';

export const InputContainer = styled.div`
    width:100%;
    height: 75px;
    background-color: #333333;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    font-size: 24px;
    font-family: 'Roboto';
    
    input{
        width: 90%;
        height: 80%;
        background-color: #BBBBBB;
        border-radius: 5px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`;