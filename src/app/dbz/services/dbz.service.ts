import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzModulebzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Gokú',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    constructor() { }

    addCharacter(character: Character): void {
        const newCharacter: Character = { ...character, id: uuid() }
        // const newCharacter: Character = {
            // id: uuid(),
            // name: character.name,
            // power: character.power,
        // }
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number) {
    //     this.characters.splice(index, 1);
    // }

    deleteCharacterById(id: string){
        this.characters = this.characters.filter( character => character.id !== id );
    }

}