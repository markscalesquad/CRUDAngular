import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProjectsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProjectName: ['', Validators.required],
      ProjectDescription: ['', Validators.required],
    });
  }

  addProject(ProjectName, ProjectDescription) {
    console.log('ProjectAddComponent@addProject')
    this.ps.addProject(ProjectName, ProjectDescription);
  }

  ngOnInit() {
    console.log('ProjectAddComponent@ngOnInit')
  }

}
