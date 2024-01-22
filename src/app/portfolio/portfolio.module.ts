import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './components/portfolio.component';
import { PortfolioFilterComponent } from './components/portfolio-filter/portfolio-filter.component';

@NgModule({
  declarations: [PortfolioComponent, PortfolioFilterComponent],
  imports: [CommonModule, SharedModule, PortfolioRoutingModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
