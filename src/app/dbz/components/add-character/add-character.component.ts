import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./character.component.css']
})
export class AddCharacterComponent {

  /**
   * Con este decorador se le envia data al componente hijo al padre
   */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // => va a emitir eventos de tipo 'Character'

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    // Si no hay nombre, no hago nada
    if(this.character.name.length === 0) return;

    // Emitir evento

    /**
     * Se puede simplemente hacer this.character, pero si se quiere como JS para los objetos por referencia
     * podemos usar el operador spread
     */
    this.onNewCharacter.emit({...this.character});


    // Reiniciar inputs del formulario
    this.character = { name: '', power: 0 };
  }

}
