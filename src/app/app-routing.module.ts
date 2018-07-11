import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { HomeComponent } from './home/home.component';
import { PavilionComponent } from './pavilion/pavilion.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { CuratorsComponent } from './curators/curators.component';
import { CommissionersComponent } from './commissioners/commissioners.component';
import { PressComponent } from './press/press.component';
import { EventDetailComponent } from './event-detail/event-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:tag', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'commissioners', component: CommissionersComponent },
  { path: 'curators', component: CuratorsComponent },
  { path: 'pavilion', component: PavilionComponent },
  { path: 'events/:tag', component: EventDetailComponent },
  { path: 'events', component: EventsComponent },
  { path: 'press', component: PressComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
