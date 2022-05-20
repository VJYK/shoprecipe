import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('Mango','Tastymango','https://media.istockphoto.com/photos/fresh-raw-mangoes-picture-id980812590?k=20&m=980812590&s=612x612&w=0&h=4V49afTsvCBMfRhHMurjvGi4vtTGLMOdHTidQsfKvdQ='),
    new Recipe('Mango','Hapus mango','https://media.istockphoto.com/photos/fresh-raw-mangoes-picture-id980812590?k=20&m=980812590&s=612x612&w=0&h=4V49afTsvCBMfRhHMurjvGi4vtTGLMOdHTidQsfKvdQ=')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log('itemclicked', recipe);
    
  }

}
