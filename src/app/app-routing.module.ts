import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectMononautComponent } from './projects-page/project-mononaut/project-mononaut.component';
import { ProjectPageComponent } from './projects-page/project-page/project-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects-page',
    component: ProjectsPageComponent,
    data: {
      animation: 'isRight'
    }
  },
  {
    path: 'project-mononaut',
    component: ProjectMononautComponent,
    data: {
      animation: 'isRight'
    },
  },
  {
    path: 'project-keystrokes',
    component: ProjectPageComponent,
    data: {
      animation: 'isLeft'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
