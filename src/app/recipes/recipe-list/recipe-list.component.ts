import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.cooky.vn/images/blog-2016/tim-hieu-cac-loai-bot-lam-banh-giup-cac-chi-em-chon-dung-bot-lam-dung-banh%2070.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/57acc9d3f1c801a1038bc775/master/w_4000,h_2667,c_limit/real-tuna-casserole-USE-THIS.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
