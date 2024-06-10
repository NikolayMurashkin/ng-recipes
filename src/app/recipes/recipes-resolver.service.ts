import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  MaybeAsync,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipesService } from './recipes.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class RecipesRecolverService implements Resolve<Recipe[]> {
//   constructor(
//     private dataStorageService: DataStorageService,
//     private recipesService: RecipesService
//   ) {}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const recipes = this.recipesService.getRecipes();
//     if (recipes.length === 0) {
//       return this.dataStorageService.fetchRecipes();
//     } else {
//       return recipes;
//     }
//   }
// }

export const recipesResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): MaybeAsync<Recipe[]> => {
  return inject(DataStorageService).fetchRecipes();
};
