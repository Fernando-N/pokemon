import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 16px;

  img {
    width: 3rem;
    height: 2rem;
    border-radius: 8px;
    background: ${(props) => props.theme.water};
  }

  button {
    border-radius: 8px;
    padding: 0.25rem;
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.theme.water};
  border-radius: 8px;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 360px) {
    display: grid;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PokemonName = styled.div`
  h3 {
    text-transform: capitalize;
    text-align: center;
  }

  img {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 720px) {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  @media (max-width: 360px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

export const PokemonInfoDiv = styled.div`
  h3 {
    text-align: center;
  }
`;

export const PokemonStats = styled(PokemonInfoDiv)`
  display: flex;
  flex-direction: column;
  gap: 0;

  span {
    text-transform: capitalize;
  }
`;

export const PokemonAbilities = styled(PokemonInfoDiv)`
  display: flex;
  flex-direction: column;

  strong {
    text-transform: capitalize;
  }

  p {
    margin: 8px 0;
  }
`;

export const PokemonMoves = styled(PokemonInfoDiv)`
  span {
    margin-right: 4px;
    text-transform: capitalize;
  }
`;
