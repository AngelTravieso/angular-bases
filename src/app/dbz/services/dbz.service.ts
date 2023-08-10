import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// a-service

// @Injectable => le indica a angular que es un servicio y que se puede inyectar
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {name: 'Krilin', power: 1000},
    {name: 'Goku', power: 9500},
    {name: 'Vegeta', power: 7500},
  ];

  // Character => evento que se recibe del formulario, propagado
  onNewCharacter( character: Character ): void {
    // console.log('Main Page');
    // console.log(character);

    // Añadir nuevo personaje al final del arreglo
    this.characters.push( character );

  }


  onDeletedCharacter( index: number ): void {
    this.characters.splice( index, 1 );
  }

}
