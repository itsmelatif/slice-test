
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationConfigService } from './localization-config.service';
import { AppConstant } from 'src/app/constant/app-constant';


@Injectable()
export class LocalizationService {
  private _localeId: string = AppConstant.DEFAULT_VALUE_LANG; 

  constructor(
    @Optional() @SkipSelf() private singleton: LocalizationService,
    private config: LocalizationConfigService,
    private translateService: TranslateService
  ) {
    if (this.singleton) {
      throw new Error(
        'LocalizationService is already provided by the root module'
      );
    }
    this._localeId = this.config.locale_id;
  }

  public initService(): Promise<void> {
    this._localeId = localStorage.getItem('language') || AppConstant.DEFAULT_VALUE_LANG;
    return this.useLanguage(this._localeId);
  }

  public useLanguage(lang: string): Promise<void> {
    this.translateService.setDefaultLang(lang);
    return this.translateService
      .use(lang)
      .toPromise()
      .catch(() => {
        throw new Error('LocalizationService.init failed');
      });
  }

  public translate(key: string | string[], interpolateParams?: object): string {
    return this.translateService.instant(key, interpolateParams) as string;
  }
}
