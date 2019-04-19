import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Sponsor } from '../sponsor';

import { ProjectService } from '../project.service';
import { SponsorService } from '../sponsor.service';
import { AcknowledgementGroupService } from '../acknowledgement-group.service';
import { AcknowledgementGroup } from '../acknowledgement-group';

@Component({
  selector: 'app-pavilion',
  templateUrl: './pavilion.component.html',
  styleUrls: ['./pavilion.component.css']
})
export class PavilionComponent implements OnInit {

  pavilion:               Project;
  sponsors:               Sponsor[];
  acknowledgementGroups: AcknowledgementGroup[][];
  galleryWidth:           string = "100%";
  galleryHeight:          string = "750px";

  constructor(
    private projectService: ProjectService, 
    private sponsorService: SponsorService,
    private acknowledgementGroupService: AcknowledgementGroupService
  ) { }

  ngOnInit() {
    this.getPavilion();
    this.getSponsors();
    this.getAcknowledgementGroups();
  }

  getPavilion(): void {
    this.projectService.getPavilion()
      .subscribe(pavilion => this.pavilion = pavilion);
      
  }

  getSponsors(): void {
    this.sponsorService.getSponsors()
      .subscribe(sponsors => this.sponsors = sponsors);
  }

  getAcknowledgementGroups(): void {
    this.acknowledgementGroupService.getAcknowledgementGroups()
      .subscribe(acknowledgementGroups => {
        this.acknowledgementGroups = acknowledgementGroups;
      });
        
  }
}
