import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { ProjectInfo } from 'src/app/core/models';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectData!: ProjectInfo;

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.projectData,
      },
    };

    this.bsModalRef = this.modalService.show(
      ProjectModalComponent,
      modalOptions
    );
  }
}
