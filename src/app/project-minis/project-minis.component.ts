import { Component, OnInit } from '@angular/core';
import { ProjectMini } from '../project-mini';
import { ProjectMiniService } from '../project-mini.service';

@Component({
  selector: 'app-project-minis',
  templateUrl: './project-minis.component.html',
  styleUrls: ['./project-minis.component.css']
})
export class ProjectMinisComponent implements OnInit {

  projectMinis: ProjectMini[];

  constructor(private projectMiniService: ProjectMiniService) { }

  ngOnInit() {
    this.getProjectMinis();
  }

  getProjectMinis(): void {
    this.projectMiniService.getProjectMinis()
      .subscribe(projectMinis => this.projectMinis = projectMinis);
  }

}
