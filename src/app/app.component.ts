import { Component, OnInit } from '@angular/core';

import { LocalizeService } from './core/services/localize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';

  constructor(private langService: LocalizeService) {}

  ngOnInit(): void {
    this.langService.initialLang();
  }
}
