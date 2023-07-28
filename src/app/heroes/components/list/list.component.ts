import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; // => una propiedad opcional por defecto es undefined

  // Remover último elemento de la lista y devolverlo
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

  }

}
