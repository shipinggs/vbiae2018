import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Sponsor } from '../sponsor';

import { ProjectService } from '../project.service';
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-pavilion',
  templateUrl: './pavilion.component.html',
  styleUrls: ['./pavilion.component.css']
})
export class PavilionComponent implements OnInit {

  pavilion: Project;
  sponsors: Sponsor[];
  galleryWidth: string = "100%";
  galleryHeight: string = "750px";

  constructor(
    private projectService: ProjectService, 
    private sponsorService: SponsorService ) { }

  ngOnInit() {
    this.getPavilion();
    this.getSponsors();
  }

  getPavilion(): void {
    this.projectService.getPavilion()
      .subscribe(pavilion => this.pavilion = pavilion);
      
  }

  getSponsors(): void {
    this.sponsorService.getSponsors()
      .subscribe(sponsors => this.sponsors = sponsors);
  }

}
