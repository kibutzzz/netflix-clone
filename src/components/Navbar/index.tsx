import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;

  background-color: #000;
  color: white;

  width: 100vw;
  height: fit-content;

  padding: 16px 72px;

  display: flex;
  flex-direction: row;
  align-items: center;

  .logo > label {
      font-size: 2rem;
      color: red;
   }
   
   .item {
     padding-left: 16px;
     font-size: 0.8rem;
   }
`;

function Navbar() {
  return (
    <Container>
      <div className="logo">
        <label>Netflix</label>
      </div>
      <div className="item">Inicio</div>
      <div className="item">Séries</div>
      <div className="item">Filmes</div>
      <div className="item">Mais recentes</div>
      <div className="item">Minha lista</div>
    </Container>
  );
}

export default Navbar;