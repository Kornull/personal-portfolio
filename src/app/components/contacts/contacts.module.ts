import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsComponent } from './components/contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, SharedModule, ContactsRoutingModule],
})
export class ContactsModule {}
