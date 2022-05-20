import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {

  @ViewChild('ingName') nameRef:ElementRef;
  @ViewChild('ingPrice') priceRef:ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const name = this.nameRef.nativeElement.value;
    const price = this.priceRef.nativeElement.value;
    const newIngredient= new Ingredient(name,parseInt(price));
    this.ingredient.emit(newIngredient)
  }
}
