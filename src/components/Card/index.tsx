import { Link } from 'react-router-dom';
import { Pokemon } from '../../pages/Home';
import { CardContainer, CardContent, PokemonName } from './styles';

interface CardProps {
  pokemons: Pokemon[];
  loading: boolean;
}

export function Card({ pokemons, loading }: CardProps) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CardContainer>
          {pokemons.map((item) => {
            const types = item.types[0];

            return (
              <CardContent pokemonType={types} key={item.id}>
                <Link to="/info" state={{ pokemon: item }}>
                  <img src={item.sprites.front_default} />
                  <PokemonName pokemonType={types}>{item.name}</PokemonName>
                </Link>
              </CardContent>
            );
          })}
        </CardContainer>
      )}
    </>
  );
}
