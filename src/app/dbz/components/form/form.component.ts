import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  // es lo mismo que
  // @Output() public onNewCharacter = new EventEmitter();
  // Lo único que cambia es que se le da un tipado
  // A la larga lo único que necesitamos es una propiedad con una nueva instancia de new EventEmitter()
  
  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character})
    this.character.name = ''
    this.character.power = 0
  }

}
