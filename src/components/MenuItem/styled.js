import styled from "styled-components";

export const LinkArea = styled.a`
    display:flex;  
    justify-content: center;
    align-items: center;
    background-color: ${props=> props.active ? '#0b4d0b' : 'transparent'};
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
`;