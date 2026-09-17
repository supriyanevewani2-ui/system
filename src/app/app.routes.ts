import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CoursessComponent } from './coursess/coursess.component';
import { ServicessComponent } from './servicess/servicess.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomenewComponent } from './homenew/homenew.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

  { path: 'servicessss', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: 'coursessss', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'courses',component:CoursessComponent},
  { path: 'services', component: ServicessComponent },
  { path: 'contactus', component: ContactusComponent },
  


];
export const routerOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
};