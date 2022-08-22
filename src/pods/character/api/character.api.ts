import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => 
  await (await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json();
