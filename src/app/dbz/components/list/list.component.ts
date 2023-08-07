import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  /**
   * Con este decorador decimos que mi ListComponent puede recibir una property llamada `characterList`,
   * es decir, Input() define una propiedad que puede ser enviada desde un componente padre al componente hijo
   */
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

  // onDelete() = Index value : number

  onDeleteCharacter( index:number ):void {
    // TODO: Emitir el ID del personaje
    console.log({index});
  }

}
