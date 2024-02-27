import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [ProjectCardComponent, ProjectModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    ProjectCardComponent,
    CarouselModule,
    FormsModule,
    CollapseModule,
    TranslateModule,
  ],
})
export class SharedModule {}
