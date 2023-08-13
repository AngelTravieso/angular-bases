import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

// a-service

// @Injectable => le indica a angular que es un servicio y que se puede inyectar
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
  ];

  // Character => evento que se recibe del formulario, propagado
  addCharacter( character: Character ): void {
    // console.log('Main Page');
    // console.log(character);

    const newCharacter: Character = {
      ...character, // => toma todas sus propiedades y esparcelas en el nuevo objeto que se crea
      id: uuid(),
    };

    // Añadir nuevo personaje al final del arreglo
    this.characters.push( newCharacter );

  }


  // onDeletedCharacter( index: number ): void {
  //   this.characters.splice( index, 1 );
  // }

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
