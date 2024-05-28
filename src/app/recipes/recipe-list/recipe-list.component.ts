import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipesService) {}

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
