import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() public characterList: Character[] = [];
  @Output() public deleteEmiter: EventEmitter<number> = new EventEmitter();

  onDelete(index: number) {

  }

  onDeleteCharacter(index: number): void{
    this.deleteEmiter.emit(index)
  }
}
