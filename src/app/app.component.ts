import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoprecipe';
  loadedFeature="recipe"
  onNavigate(event){
    this.loadedFeature = event;
  }
}
