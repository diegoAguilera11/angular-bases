import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'batman';
  public age: number = 33;


  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'SpiderMan'
  }

  changeAge():void {
    this.age = 24
  }

  resetForm():void {
    this.name = 'batman';
    this.age = 33;
  }

}
