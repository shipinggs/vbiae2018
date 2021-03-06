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
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { ProjectMiniService } from './project-mini.service';
import { ProjectMinisComponent } from './project-minis/project-minis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeCarouselService } from './home-carousel.service';
import { ContactService } from './contact.service';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ConversationService } from './conversation.service';
import { CommissionersCuratorsService } from './commissioners-curators.service';
import { CuratorsComponent } from './curators/curators.component';
import { CommissionersComponent } from './commissioners/commissioners.component';
import { PressComponent } from './press/press.component';
import { ProjectMiniComponent } from './project-mini/project-mini.component';
import { EventService } from './event.service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SponsorService } from './sponsor.service';
import { AcknowledgementGroupService } from './acknowledgement-group.service';

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
    FooterComponent,
    CuratorsComponent,
    CommissionersComponent,
    PressComponent,
    ProjectMiniComponent,
    EventDetailComponent,
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
    NgsRevealModule.forRoot(),
    LazyLoadImageModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    ProjectService,
    CommissionersCuratorsService,
    ProjectMiniService,
    HomeCarouselService,
    ContactService,
    ConversationService,
    EventService,
    SponsorService,
    AcknowledgementGroupService,
    NgbTabsetConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgsRevealConfig) {
    
    // customize default values of ng-scrollreveal directives used by this component tree
    config.duration = 1000;
    config.easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    config.delay = 0;
    config.distance = "30px";
    config.opacity = 0;
    config.scale = 1;
    config.viewFactor = 0.22;    
    
  }
}
