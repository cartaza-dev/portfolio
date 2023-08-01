import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkingComponent } from './working/working.component';
import { InfoComponente1Component } from './info-componente1/info-componente1.component';
import { InfoComponente2Component } from './info-componente2/info-componente2.component';
import { InfoComponente3Component } from './info-componente3/info-componente3.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'sobremi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'construyendo', component: WorkingComponent},
  {path: 'proyecto1', component: InfoComponente1Component},
  {path: 'proyecto2', component: InfoComponente2Component},
  {path: 'proyecto3', component: InfoComponente3Component},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
