import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Candas';
  items = [
    { description: "Kahvalti", action: "No" },
    { description: "Sinema", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Ders Calisma", action: "No" },
    { description: "Ekonomi", action: "No" }
  ];
}
