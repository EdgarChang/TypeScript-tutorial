import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() {
  	this.movies = [];
  }

  ngOnInit(): void {
  }
	
  movies:Hero[];

  @Input() hero: Hero;

  nominate(movie:Hero) {
  	this.movies.push(movie);
  }

  

}
