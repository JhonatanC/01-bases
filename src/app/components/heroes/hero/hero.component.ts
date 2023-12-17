import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public nombre: string = 'Ironman';
  public edad: number = 45;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = 'Capitan América';
  }

  changeAge(): void {
    this.edad = 100
  }

}
