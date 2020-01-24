import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  angForm: FormGroup;
  project: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProjectsService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    console.log('ProjectEditComponent@createForm')
    this.angForm = this.fb.group({
      ProjectName: ['', Validators.required ],
      ProjectDescription: ['', Validators.required ],
    });
  }

  updateProject(ProjectName, ProjectDescription, id) {
    console.log('ProjectEditComponent@updateProject')
    this.route.params.subscribe(params => {
      this.ps.updateProject(ProjectName, ProjectDescription, params.id);
      // this.router.navigate(['projects']);
    });
  }
  
  ngOnInit() {
    console.log('ProjectEditComponent@ngOnInit')
    this.route.params.subscribe(params => {
        this.ps.editProject(params['id']).subscribe(res => {
          this.project = res;
      });
    });
  }

}
