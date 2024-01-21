import { Component, Input } from '@angular/core';
import { ProjectInfo } from 'src/app/core/models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectData!: ProjectInfo;
}
