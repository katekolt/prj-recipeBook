import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
   new Recipe('The Recipe', 'That is good recipe', 'https://bakingmischief.com/wp-content/uploads/2018/07/small-batch-sugar-cookies-image-square-2-500x375.jpg'),
    new Recipe('The Recipe 2', 'That is good recipe', 'https://bakingmischief.com/wp-content/uploads/2018/07/small-batch-sugar-cookies-image-square-2-500x375.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
}
}
