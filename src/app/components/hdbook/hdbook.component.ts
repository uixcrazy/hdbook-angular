import { Component, OnInit } from '@angular/core';

// import { Hero }        from './hero';
// import { HeroService } from './hero.service';

@Component({
  selector: 'hdbook',
  template: `
    <h1>{{welcome}}</h1>
  `
})
export class HdbookComponent implements OnInit {
  welcome : string;
  constructor(){
    this.welcome = "Welcome to HDbook page";
  };

  ngOnInit(): void {
    console.log('start HDbook');
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
