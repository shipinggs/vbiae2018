import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pavilion',
  templateUrl: './pavilion.component.html',
  styleUrls: ['./pavilion.component.css']
})
export class PavilionComponent implements OnInit {

  pavilion: Project;
  galleryWidth: string = "100%";
  galleryHeight: string = "750px";

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getPavilion();
  }

  getPavilion(): void {
    this.projectService.getPavilion()
      .subscribe(pavilion => this.pavilion = pavilion);
      
  }

}
