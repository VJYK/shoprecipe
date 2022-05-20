import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor() { }
  @Output() featureSelected = new EventEmitter<any>()
  ngOnInit(): void {
  }
  onSelect(feature:any){
    this.featureSelected.emit(feature)
  }
}
