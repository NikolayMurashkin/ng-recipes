import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentFeature = 'recipes';

  onNavigate(feature: string) {
    this.currentFeature = feature
  }
}
