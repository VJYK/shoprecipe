import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;

  @Output() recipeItemSelected =new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeItemSelected.emit();
    console.log('items');
    
  }
}
