import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WorksComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
      { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
      { path: 'works', component: WorksComponent, data: {animation: 'WorksPage'}},
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
