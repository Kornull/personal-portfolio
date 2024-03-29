import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { ProjectsService } from 'src/app/core/services';
import { ProjectInfo } from '../../../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2500, noPause: true },
    },
  ],
})
export class HomeComponent implements OnInit {
  project!: ProjectInfo;

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Uladzimir K. - Home');
  }

  ngOnInit(): void {
    this.project = this.projectsService.getOneProject(0);
  }
}
