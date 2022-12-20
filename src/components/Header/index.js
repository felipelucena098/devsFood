import React, {useState} from "react";
import { Container, Logo, SeachInput } from './styled';

export default () => {

  const [inputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  return(
    <Container>
      <Logo src="/assets/logo.png"></Logo>
      <SeachInput
        type="text"
        placeholder="Digite um produto..."
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );

};
