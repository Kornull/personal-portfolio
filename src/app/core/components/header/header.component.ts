import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeService } from '../../services/localize.service';
import { LanguageKeys } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  btnTitle: string = '';

  constructor(
    private localize: LocalizeService,
    private translate: TranslateService
  ) {
    localize.appLang$.subscribe(lang => {
      this.btnTitle =
        lang === LanguageKeys.EN ? LanguageKeys.RU : LanguageKeys.EN;

      this.translate.setDefaultLang(lang);
    });
  }

  changeLanguage() {
    this.localize.changeLang();
  }
}
