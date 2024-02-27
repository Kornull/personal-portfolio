import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectInfo } from 'src/app/core/models';
import { ProjectsService } from 'src/app/core/services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projectsData: ProjectInfo[] = [];

  isCollapse: boolean = true;

  constructor(
    private titleService: Title,
    private projects: ProjectsService
  ) {
    this.titleService.setTitle('Uladzimir K. - Portfolio');
  }

  ngOnInit(): void {
    this.projectsData = this.projects.getProjects();
  }

  filterCards(ev: ProjectInfo[]) {
    this.projectsData = ev;
  }
}
