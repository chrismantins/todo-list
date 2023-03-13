import styled from 'styled-components';

import logoRocketIImg from '../assets/logo-rocket.svg';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logoRocketIImg} alt='Logo My ToDo List' />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.gray700};
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 0 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    img {
      height: 36px;
    }

    h1 {
      font-weight: 800;
      font-size: 2.5rem;
      line-height: 1.2;
      color: ${({ theme }) => theme.blue};
    }

    span {
      color: ${({ theme }) => theme.purple};
    }
  }
`;

export { Header };
