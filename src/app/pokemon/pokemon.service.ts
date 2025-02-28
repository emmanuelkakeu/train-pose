import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

getPokemonById(pokemonId: number): Pokemon | undefined {
  return POKEMONS.find(Pokemon => pokemonId == Pokemon.id);
}

getPokemonTypeList(): string[] {
  return [
    'Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poison',
    'Fée',
    'Vol',
    'Combat',
    'Psy'
  ];
}


}
