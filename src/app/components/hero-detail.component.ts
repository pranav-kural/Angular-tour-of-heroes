import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './app/views/hero-detail.component.html',
    styleUrls: ['./app/views/styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit { 
    @Input() hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }
 }