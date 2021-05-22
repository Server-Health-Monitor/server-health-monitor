import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationPageComponent } from './pages/application-page/application-page.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'applications/:id',
    component: ApplicationPageComponent,
  },
  {
    path:'applications',
    component: ApplicationsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
