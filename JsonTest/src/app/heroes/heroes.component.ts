import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Child } from '../child';
import { Children } from '../moc-child';
import { DataService } from '../data.service'; // Adjust the path as needed

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  inputImagePath = '';

  channelImagePath = 'https://i.ibb.co/Gc7MBwf/alien-head-3.png';
  outputImagePath = '';
  showFirstTable = false;
  showSecondTable = false;
  variable1 = 'Value 1';
  variable2 = 'Value 2';

  heroes = HEROES;
  selectedHero?: Hero;
  children = Children;

  sflist: any = {}; // Initialize an empty object

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.sflist = data.sflist;
      console.log(this.sflist.moduleInlist+"it is empty");
      console.log(this.sflist.panel.inputParameters+"it is empty");
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.showFirstTable = true;
    this.inputImagePath = this.sflist.panel.moduleInImagePath;
  }
  onSelectOut(): void {
    this.showSecondTable = true;
    this.outputImagePath = 'https://i.ibb.co/51MVD7K/alien-head-1.png';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
