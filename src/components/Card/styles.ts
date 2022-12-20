import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  gap: 0.50rem;
  text-align: center;
`

interface TypesProps {
  pokemonType:{
    type: {
      name: string
    }
  }
}

export const CardContent = styled.div<TypesProps>`
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};

  ${(props) => {
    switch(props.pokemonType.type.name) {
      case 'normal':
        return css`
          border: 2px solid ${(props) => props.theme.normal};
        `
      case 'fighting':
        return css`
          border: 2px solid ${(props) => props.theme.fighting};
        `
      case 'flying':
        return css`
          border: 2px solid ${(props) => props.theme.flying};
        `
      case 'ground':
        return css`
          border: 2px solid ${(props) => props.theme.ground};
        `  
      case 'poison':
        return css`
          border: 2px solid ${(props) => props.theme.poison};
        `  
      case 'rock':
        return css`
          border: 2px solid ${(props) => props.theme.rock};
        `
      case 'bug':
        return css`
          border: 2px solid ${(props) => props.theme.bug};
          
        `
      case 'ghost':
        return css`
          border: 2px solid ${(props) => props.theme.ghost};
        `
      case 'steel':
        return css`
          border: 2px solid ${(props) => props.theme.steel};
        `
      case 'fire':
        return css`
          border: 2px solid ${(props) => props.theme.fire};
        `
      case 'water':
        return css`
          border: 2px solid ${(props) => props.theme.water};
        `
      case 'grass':
        return css`
          border: 2px solid ${(props) => props.theme.grass};
        `
      case 'electric':
        return css`
          border: 2px solid ${(props) => props.theme.electric};
        `
      case 'psychic':
        return css`
          border: 2px solid ${(props) => props.theme.psychic};
        `
      case 'ice':
        return css`
          border: 2px solid ${(props) => props.theme.ice};
        `
      case 'dragon':
        return css`
          border: 2px solid ${(props) => props.theme.dragon};
        `
      case 'dark':
        return css`
          border: 2px solid ${(props) => props.theme.dark};
        `
      case 'fairy':
        return css`
          border: 2px solid ${(props) => props.theme.fairy};
        `
    }
   
  }}

` 

export const PokemonName = styled.h2<TypesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  color: ${(props) => props.theme.white};
  ${(props) => {
    switch(props.pokemonType.type.name) {
      case 'normal':
        return css`
          background: ${(props) => props.theme.normal};
        `
      case 'fighting':
        return css`
          background: ${(props) => props.theme.fighting};
        `
      case 'flying':
        return css`
          background: ${(props) => props.theme.flying};
        `
      case 'ground':
        return css`
          background: ${(props) => props.theme.ground};
        `  
      case 'poison':
        return css`
          background: ${(props) => props.theme.poison};
        `  
      case 'rock':
        return css`
          background: ${(props) => props.theme.rock};
        `
      case 'bug':
        return css`
          background: ${(props) => props.theme.bug};
        `

      case 'ghost':
        return css`
          background: ${(props) => props.theme.ghost};
        `
      case 'steel':
        return css`
          background: ${(props) => props.theme.steel};
        `
      case 'fire':
        return css`
          background: ${(props) => props.theme.fire};
        `
      case 'water':
        return css`
          background: ${(props) => props.theme.water};
        `
      case 'grass':
        return css`
          background: ${(props) => props.theme.grass};
        `
      case 'electric':
        return css`
          background: ${(props) => props.theme.electric};
        `
      case 'psychic':
        return css`
          background: ${(props) => props.theme.psychic};
        `
      case 'ice':
        return css`
          background: ${(props) => props.theme.ice};
        `
      case 'dragon':
        return css`
          background: ${(props) => props.theme.dragon};
        `
      case 'dark':
        return css`
          background: ${(props) => props.theme.dark};
        `
      case 'fairy':
        return css`
          background: ${(props) => props.theme.fairy};
        `
    }
  }}
  height: 3rem;
  
`