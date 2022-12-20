import styled from "styled-components";

export const Container = styled.div`
  background-color: #136713;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: auto;
  height: 70px;
`;

export const SeachInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${props => props.active ? 300 : 0}px;
  height: 50px;
  background-color: white;
  background-image: url('/assets/search.png');
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 12px center;
  outline: 0;
  padding-left: 50px;
  cursor: pointer;
  transition: all ease .2s;
  font-size: 15px;

  &:focus{
    cursor: text;
  }
`;
