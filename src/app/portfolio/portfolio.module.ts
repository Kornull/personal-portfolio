import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './components/portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, SharedModule, PortfolioRoutingModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
