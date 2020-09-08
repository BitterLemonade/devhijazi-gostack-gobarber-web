import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src="/img/logo.svg" alt="Logo" />

      <form>
        <h1>Faça seu Logon</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="register">
        <FiLogIn />
        Criar uma conta.
      </a>
    </Content>
    <Background />
  </Container>
);
export default Signin;
