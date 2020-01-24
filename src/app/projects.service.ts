import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  uri = 'http://localhost:4000/projects';

  constructor(private http: HttpClient) { }

  addProject(ProjectName, ProjectDescription) {
    console.log(ProjectName, ProjectDescription, 'ProjectsService@addProject');
    const obj = {
      ProjectName,
      ProjectDescription
    };

    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProjects() {
    return this.http.get(`${this.uri}`);
  }

  editProject(id) {
    console.log('editProject', id)
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProject(ProjectName, ProjectDescription, id) {
    const obj = {
      ProjectName,
      ProjectDescription,
    };

    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Done'));
  }

  deleteProject(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
