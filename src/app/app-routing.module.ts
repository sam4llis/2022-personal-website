import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './projects-page/project-page/project-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects-page',
    component: ProjectsPageComponent
  },
  // {
  //   path: 'project-mononaut',
  //   component:
  // },
  {
    path: 'project-keystrokes',
    component: ProjectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
