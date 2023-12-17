import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() public characterList: Character[] = [];
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  // onDelete(index: number) {}

  onDeleteCharacter(id: string): void{
    // console.log(id);    
    this.onDelete.emit(id)
  }
}
