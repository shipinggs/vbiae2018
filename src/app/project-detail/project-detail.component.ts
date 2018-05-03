import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../project';
import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  galleryWidth: string = "600px";
  galleryHeight: string = "750px";

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getProject();
  }
  getProject(): void {
    const tag = this.route.snapshot.paramMap.get('tag');
    this.projectService.getProject(tag)
      .subscribe(project => {
        this.project = project;
      });
  }
  
  getInterviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.interviewUrl);
  }

  // remove when ready
  goBack(): void {
    this.location.back()
  }

}
