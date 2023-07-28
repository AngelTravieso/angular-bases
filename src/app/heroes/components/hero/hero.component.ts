import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${ this.name } ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 18;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // Esto se puede hacer, pero Angular no estará pendiente del ciclo de ejecución
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.outerHTML = '<h1>Desde Angular</h1>';
    // });
  }


}
