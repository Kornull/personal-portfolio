import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [ProjectCardComponent, ProjectModalComponent],
  imports: [CommonModule, ModalModule.forRoot(), CarouselModule.forRoot()],
  exports: [ProjectCardComponent, CarouselModule],
})
export class SharedModule {}
