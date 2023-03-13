import styled from 'styled-components';

import { HiOutlineClipboardList } from 'react-icons/hi';

function EmptyTasks() {
  return (
    <>
      <Container>
        <HiOutlineClipboardList size='56' />
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </Container>
    </>
  );
}

export const Container = styled.div`
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.gray400};
  padding: 64px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 1rem;
    line-height: 140%;
    text-align: center;
    color: ${({ theme }) => theme.gray300};

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 16px;

    span {
      font-size: 1rem;
      line-height: 140%;
      text-align: center;
      font-weight: normal;
    }
  }
`;

export { EmptyTasks };
