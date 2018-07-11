import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../project';
import { ProjectService }  from '../project.service';
import { Conversation } from '../conversation';
import { ConversationService } from '../conversation.service';
import { EmbedVideoService } from 'ngx-embed-video/dist';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  conversations: Conversation[] = [];
  galleryWidth: string = "100%";
  galleryHeight: string = "750px";

  interview_iframe_html: any;
  left_iframe_html: any;
  right_iframe_html: any;

  interviewUrl = "";
  atmosphericLeftUrl = "";
  atmosphericRightUrl = "";
  
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private conversationService: ConversationService,
    private location: Location,
    private embedService: EmbedVideoService
  ) {  }

  ngOnInit() {
    this.getProject();
  }
  getProject(): void {
    const tag = this.route.snapshot.paramMap.get('tag');
    this.projectService.getProject(tag)
      .subscribe(project => {
        this.project = project;
        this.interviewUrl = project.interviewUrl;
        this.atmosphericLeftUrl = project.atmosphericLeftUrl;
        this.atmosphericRightUrl = project.atmosphericRightUrl;
        try {
          this.interview_iframe_html = this.embedService.embed(this.interviewUrl, { attr: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } });
        } catch (e) {
          this.interview_iframe_html = false;
        }
        try {
          this.left_iframe_html = this.embedService.embed(this.atmosphericLeftUrl, { attr: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } });
          this.right_iframe_html = this.embedService.embed(this.atmosphericRightUrl, { attr: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } });
        } catch (e) {
          this.left_iframe_html = false;
          this.right_iframe_html = false;
        }
      });
    this.conversationService.getConversation(tag)
      .subscribe(conversations => {
        this.conversations = conversations;
      });
  }

  // remove when ready
  goBack(): void {
    this.location.back()
  }
}
