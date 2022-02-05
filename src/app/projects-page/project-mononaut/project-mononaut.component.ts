import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-mononaut',
  templateUrl: './project-mononaut.component.html',
  styleUrls: ['./project-mononaut.component.css']
})
export class ProjectMononautComponent implements OnInit {
  @Input() project = {title: 'test', description: 'test', link:'/project-mononaut'};

  constructor() { }

  ngOnInit(): void {
  }

}
