import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartBody = styled.div`
    
`;

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 290px;
    cursor: pointer;
`;

export const CartText = styled.p`
    color: white;
    font-size: 17px;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
`;