import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from 'src/app/core/models';
import { projectsData } from 'src/app/shared/mock';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: Projects;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Uladzimir K. - Portfolio');
    this.projects = projectsData;
  }
}
