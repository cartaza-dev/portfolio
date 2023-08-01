import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { WorkingComponent } from './working/working.component';
import { InfoComponente1Component } from './info-componente1/info-componente1.component';
import { InfoComponente2Component } from './info-componente2/info-componente2.component';
import { InfoComponente3Component } from './info-componente3/info-componente3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    WorkingComponent,
    InfoComponente1Component,
    InfoComponente2Component,
    InfoComponente3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
