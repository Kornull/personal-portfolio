import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProjectInfo } from 'src/app/core/models';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2000, noPause: true },
    },
  ],
})
export class ProjectModalComponent {
  project!: ProjectInfo;

  constructor(private bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}
