import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }

  > span {
    color: var(--gray);
    margin-bottom: 3px;

  }
`;
