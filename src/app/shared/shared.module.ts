import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [ProjectCardComponent, ProjectModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
  ],
  exports: [ProjectCardComponent, CarouselModule, FormsModule, CollapseModule],
})
export class SharedModule {}
