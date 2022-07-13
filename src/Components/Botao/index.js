import React from 'react';
import { BotaoCustomizado } from './styles'

const Botao = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <BotaoCustomizado
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </BotaoCustomizado>
   );
}
 
export default Botao;