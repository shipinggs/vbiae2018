import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { NgsRevealModule } from 'ng-scrollreveal';
import { NgsRevealConfig } from 'ng-scrollreveal';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectService } from './project.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PavilionComponent } from './pavilion/pavilion.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AboutService } from './about.service';
import { ProjectMiniService } from './project-mini.service';
import { ProjectMinisComponent } from './project-minis/project-minis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeCarouselService } from './home-carousel.service';
import { ContactService } from './contact.service';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ConversationService } from './conversation.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    HomeComponent,
    AboutComponent,
    PavilionComponent,
    ContactComponent,
    EventsComponent,
    ProjectMinisComponent,
    NavbarComponent,
    CarouselComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgxGalleryModule,
    HttpModule,
    EmbedVideo.forRoot(),
    NgsRevealModule.forRoot()
   ],
  providers: [
    ProjectService,
    AboutService,
    ProjectMiniService,
    HomeCarouselService,
    ContactService,
    ConversationService,
    NgbTabsetConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgsRevealConfig) {
    // customize default values of ng-scrollreveal directives used by this component tree
    
    // config.duration = 1000;
    // config.easing = 'cubic-bezier(0.95, 0.1, 0.1, 0.95)';
    config.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
    config.delay = 0;
    config.distance = "0px";
    config.opacity = 0;
    config.scale = 0.95;
    // config.reset = true;
    
    
  }
}
