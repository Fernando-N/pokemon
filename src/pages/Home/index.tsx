import { useContext, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import {
  Button,
  ButtonGroup,
  CardContainer,
  Container,
  MainContainer,
  NavContainer,
} from './styles';
import arrow from '../../assets/arrow.svg';
import poke from '../../assets/poke.png';
import { ThemeContext } from '../../contexts';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    0: {
      type: {
        name: string;
      };
    };
  };
}

type Data = {
  url: string;
  next: string;
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10');
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  const [isFetching, setIsFetching] = useState(false);

  const { toggleTheme } = useContext(ThemeContext);

  async function getPokemon(response: Data[]) {
    response.map(async (item) => {
      const result = await fetch(item.url);
      const data = await result.json();

      setPokemons((state) => {
        state = [...state, data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  }

  useEffect(() => {
    const abortController = new AbortController();

    async function getData() {
      try {
        setIsFetching(true);
        const api = await fetch(url, { signal: abortController.signal });
        const response = await api.json();
        getPokemon(response.results);
        setPrevUrl(response.previous);
        setNextUrl(response.next);
        setIsFetching(false);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.log(error);
        }
      }
    }

    getData();

    return () => abortController.abort();
  }, [url]);

  return (
    <MainContainer>
      <Container>
        <NavContainer>
          <img src={poke} />
          <h1>Pokedex</h1>
          <Button onClick={toggleTheme}>Theme</Button>
        </NavContainer>

        <CardContainer>
          <Card pokemons={pokemons} loading={isFetching} />
        </CardContainer>

        <ButtonGroup>
          {prevUrl && (
            <Button
              onClick={() => {
                setPokemons([]);
                setUrl(prevUrl);
              }}
            >
              <img src={arrow} />
              Previous
            </Button>
          )}

          {nextUrl && (
            <Button
              onClick={() => {
                setPokemons([]);
                setUrl(nextUrl);
              }}
            >
              Next
              <img style={{ rotate: '180deg' }} src={arrow} />
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </MainContainer>
  );
}
