import { Component } from '@angular/core';
import { HostListener, Inject } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'No More Free Space';
  public isCollapsed = true;
  
}