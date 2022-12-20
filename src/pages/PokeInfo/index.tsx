import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ContentContainer,
  MainContainer,
  PokemonAbilities,
  PokemonInfo,
  PokemonMoves,
  PokemonName,
  PokemonStats,
  Title,
} from './styles';

import arrow from '../../assets/arrow.svg';
import { ThemeContext } from '../../contexts';

interface Props {
  pokemon: {
    abilities: [
      item: {
        ability: {
          name: string;
          url: string;
        };
      }
    ];
    name: string;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    stats: [
      item: {
        base_stat: number;
        stat: {
          name: string;
        };
      }
    ];
    moves: [
      item: {
        move: {
          name: string;
        };
      }
    ];
  };
}

interface Ability {
  id: number;
  name: string;
  effect_entries: [
    item: {
      effect: string;
      language: {
        name: string;
      };
    }
  ];
}

export function PokeInfo() {
  const [abilitiesInfo, setAbilitiesInfo] = useState<Ability[]>([]);

  const location = useLocation();
  const { pokemon }: Props = location.state;

  const movesList = pokemon.moves.slice(0, 10);
  const { toggleTheme } = useContext(ThemeContext);

  function getAbilityText(ability: Ability) {
    let text;
    ability.effect_entries.forEach((item) => {
      if (item.language.name === 'en') {
        text = item.effect;
      }
    });

    return text;
  }

  useEffect(() => {
    const abortController = new AbortController();

    async function getData() {
      try {
        pokemon.abilities.map(async (item) => {
          const api = await fetch(item.ability.url, { signal: abortController.signal });
          const response = await api.json();

          setAbilitiesInfo((state) => [...state, response]);
        });
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.log(error);
        }
      }
    }

    getData();

    return () => abortController.abort();
  }, []);

  return (
    <MainContainer>
      <Title>
        <Link to="/">
          <img src={arrow} />
        </Link>
        <h1>PokeInfo</h1>
        <button onClick={toggleTheme}>Theme</button>
      </Title>
      <ContentContainer>
        <PokemonName>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.other['official-artwork'].front_default} />
        </PokemonName>

        <PokemonInfo>
          <PokemonStats>
            <h3>Stats</h3>
            <ul>
              {pokemon.stats.map((item, index) => {
                return (
                  <li key={index}>
                    <span>
                      {item.stat.name}: {item.base_stat}
                    </span>
                  </li>
                );
              })}
            </ul>
          </PokemonStats>

          <PokemonAbilities>
            <h3>Abilities</h3>
            {abilitiesInfo.map((item) => {
              return (
                <div key={item.id}>
                  <strong>{item.name}</strong>
                  <p>{getAbilityText(item)}</p>
                </div>
              );
            })}
          </PokemonAbilities>

          <PokemonMoves>
            <h3>Moves</h3>
            <ul>
              {movesList.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.move.name}</span>
                  </li>
                );
              })}
            </ul>
          </PokemonMoves>
        </PokemonInfo>
      </ContentContainer>
    </MainContainer>
  );
}
