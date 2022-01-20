export class ProjectModel {
  title: string;
  description: string | string[];
  link: string;

  constructor(title: string, description: string, link: string) {
    this.title = title
    this.description = description;
    this.link = link;
  }
}
