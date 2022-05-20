import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('Mango',20),
    new Ingredient('Apple',80)
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }
}
