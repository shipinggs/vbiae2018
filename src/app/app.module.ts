import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectService } from './project.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PavillionComponent } from './pavillion/pavillion.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AboutService } from './about.service';
import { ProjectMiniService } from './project-mini.service';
import { ProjectMinisComponent } from './project-minis/project-minis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeCarouselService } from './home-carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MessagesComponent,
    HomeComponent,
    AboutComponent,
    PavillionComponent,
    ContactComponent,
    EventsComponent,
    ProjectMinisComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
   ],
  providers: [
    ProjectService,
    MessageService,
    AboutService,
    ProjectMiniService,
    HomeCarouselService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
