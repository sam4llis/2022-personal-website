import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})

export class ProjectPageComponent implements OnInit {
  @Input() project = {title: 'test', description: 'test', link:'/project-keystrokes'};
  // project = {
  //   title: '<strong class="font-semibold text-purple-900 underline underline-offset-4 decoration-purple-300 decoration-2">predicting keystrokes</strong> using an audio side-channel attack and machine learning 👂',
  //   text: 'For my MSc Computer Science research project, I studied the feasibility of an audio side-channel attack regarding ‘keystroke snooping’, in which an attack can utilise the acoustic emanation of a keystroke to predict a specific key (or passage of keys) being pressed. I achieved a 91% average in this project.',
  //   link: '/project-keystrokes'
  // };

  // constructor(project: ProjectModel) {
  //   this.project = project
  // }

  ngOnInit(): void {
  }

}
