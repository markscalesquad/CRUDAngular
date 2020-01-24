import { Component, OnInit } from '@angular/core';
import Project from '../Project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-get',
  templateUrl: './project-get.component.html',
  styleUrls: ['./project-get.component.scss']
})
export class ProjectGetComponent implements OnInit {

  projects: Project[];
  constructor(private ps: ProjectsService) { }

  ngOnInit() {
    console.log('ProjectGetComponent@ngOnInit')
    this.ps
      .getProjects()
      .subscribe((data: Project[]) => {
        this.projects = data;
    });
  }

  deleteProject(id) {
    console.log('ProjectGetComponent@deleteProject')
    this.ps.deleteProject(id).subscribe(res => {
      this.projects.splice(id, 1);
    });
}
}
