import { Component, EventEmitter, Output } from '@angular/core';
import { ProjectInfo, Tag } from 'src/app/core/models';
import { ProjectsService } from 'src/app/core/services';

@Component({
  selector: 'app-portfolio-filter',
  templateUrl: './portfolio-filter.component.html',
  styleUrls: ['./portfolio-filter.component.scss'],
})
export class PortfolioFilterComponent {
  @Output() tags = new EventEmitter<ProjectInfo[]>();

  projects: ProjectInfo[] = [];

  ts: boolean = false;

  js: boolean = false;

  angular: boolean = false;

  isViewFilter: boolean = true;

  isFiltering: boolean = true;

  constructor(private projectService: ProjectsService) {}

  setOpenedFilter() {
    this.isViewFilter = !this.isViewFilter;
  }

  filter() {
    const filterTags: Tag[] = [];

    if (this.ts) filterTags.push(Tag.TYPESCRIPT);
    if (this.js) filterTags.push(Tag.JS);
    if (this.angular) filterTags.push(Tag.ANGULAR);

    if (this.ts || this.js || this.angular) {
      this.isFiltering = false;
    } else {
      this.isFiltering = true;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);

    if (this.projects.length) {
      this.tags.emit(this.projects);
    } else {
      this.tags.emit(this.projectService.getProjects());
    }
  }

  resetFilter() {
    this.ts = false;
    this.js = false;
    this.angular = false;
    this.isFiltering = true;

    this.tags.emit(this.projectService.getProjects());
  }
}
