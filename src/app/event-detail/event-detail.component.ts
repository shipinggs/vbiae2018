import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  galleryWidth: string = "100%";
  galleryHeight: string = "750px";
  video_iframe_html: any;
  videoUrl = "";

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private embedService: EmbedVideoService
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void {
    const tag = this.route.snapshot.paramMap.get('tag');
    this.eventService.getEvent(tag)
      .subscribe(event => {
        this.event = event;
        this.videoUrl = event.videoUrl;
        if (this.videoUrl) {
          try {
            this.video_iframe_html = this.embedService.embed(this.videoUrl, { attr: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } });
          } catch (e) {
            this.video_iframe_html = false;
          }
        }
        
      });
  }
}
