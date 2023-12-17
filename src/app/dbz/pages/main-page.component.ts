import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzModulebzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private _dbz: DbzModulebzService  ){}

  get characters(): Character[] {
    return [...this._dbz.characters];
  }

  onDeleteCharacter(id: string): void {
    this._dbz.deleteCharacterById(id)
  }

  onNewCharacter( character: Character ): void {
    this._dbz.addCharacter(character);
  }


}
