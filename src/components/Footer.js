import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Footer(props) {
  return (
    <FooterContainer>
        <div>
          <img src={props.posterURL}/>
        </div>
      {
          //Verificar qual é a página
            //para a página Sessions, inserir filme
            //para a página Seats, inserir filme e sessão
      }
        <span>
            <p>{props.title}</p>
        </span>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  padding: 10px;
  gap: 14px;

  width: 100%;
  height: 117px;
  border-top: 1px solid #9eadba;

  background: #dfe6ed;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 89px;
    width: 64px;
    border-radius: 2px;
    background: #fff;

    img {
        height: 72px;
        width: 48px;
      }
  }
  span {
      align-self: center;
      p {
          align-self: center;
          justify-self: center;
          padding: 0;
          margin: 0;
      }
  }
`;