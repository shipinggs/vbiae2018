import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-mini',
  templateUrl: './project-mini.component.html',
  styleUrls: ['./project-mini.component.css']
})
export class ProjectMiniComponent implements OnInit {

  @Input() projectUrl: string;
  @Input() imagePath: string;
  @Input() lowResImagePath: string;
  @Input() subquote: string;
  @Input() title: string;
  // offset = 100;
  // scrollObservable = Observable.fromEvent(document.body, 'scroll');

  constructor() { }

  ngOnInit() {
  }

}
