import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-resipes-detail',
  templateUrl: './resipes-detail.component.html',
  styleUrls: ['./resipes-detail.component.css']
})
export class ResipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
