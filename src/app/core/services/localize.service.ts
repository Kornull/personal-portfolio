import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LanguageKeys, LocalStoreKeys } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LocalizeService {
  private appLang = new Subject<string>();

  private isEnLang: boolean = true;

  public appLang$ = this.appLang.asObservable();

  changeLang() {
    if (this.isEnLang) {
      this.appLang.next(LanguageKeys.RU);
    } else {
      this.appLang.next(LanguageKeys.EN);
    }

    this.isEnLang = !this.isEnLang;

    this.updateLocalStore();
  }

  initialLang() {
    const lang: string | null = localStorage.getItem(LocalStoreKeys.LANG_KEY);

    if (lang !== null) {
      this.appLang.next(lang);

      if (lang === LanguageKeys.RU) {
        this.isEnLang = false;
      }
    } else {
      this.appLang.next(LanguageKeys.EN);
    }
  }

  updateLocalStore() {
    if (this.isEnLang) {
      localStorage.setItem(LocalStoreKeys.LANG_KEY, LanguageKeys.EN);
    } else {
      localStorage.setItem(LocalStoreKeys.LANG_KEY, LanguageKeys.RU);
    }
  }
}
