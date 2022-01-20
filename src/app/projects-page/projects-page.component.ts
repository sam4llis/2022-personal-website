import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projects = [
    {title: 'test', description: 'test 1', link: '/project-keystrokes'},
    // new ProjectModel('test title 1', 'test description 1', '/project-keystrokes'),
    // new ProjectModel('test title 2', 'test description 2', '/project-keystrokes'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
