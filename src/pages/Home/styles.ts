import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const CardContainer = styled.div``;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 0.75rem;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  width: 7rem;
  gap: 5px;
  border-radius: 10px;

  background: ${(props) => props.theme.fire};
  color: white;
`;
