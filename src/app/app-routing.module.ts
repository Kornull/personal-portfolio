import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./components/portfolio/portfolio.module').then(
        m => m.PortfolioModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./components/contacts/contacts.module').then(
        m => m.ContactsModule
      ),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
