import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'No More Free Space?';  
  constructor(private meta: Meta) {
    this.meta.addTag({ name: "description", content: "The Singapore Pavilion's No More Free Space? exhibition features projects where architects, urban planners and place-makers have demonstrated creative use of space in land-scarce Singapore." });
  }
}
