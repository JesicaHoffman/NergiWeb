import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'AboutPage'} },
  { path: 'about', component: AboutComponent },
  { path: 'works', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
