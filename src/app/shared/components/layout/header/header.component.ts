import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from 'src/app/constant/app-constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeListDropdown = false
  currentLanguage: string = AppConstant.DEFAULT_VALUE_LANG;
  listLanguage = AppConstant.LIST_LANG;

  constructor(
    private _translateService: TranslateService
  ) { }

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    const className = event.target.offsetParent?.className;
    if(className === "lang-conteiner"){
      this.activeListDropdown = !this.activeListDropdown;
    }else{
      this.activeListDropdown = false;
    }
  }

  ngOnInit(): void {
    this.currentLanguage = this._translateService.currentLang;
  }

  onChangeLang(value: string){
    this._translateService.use(value);
    this.currentLanguage = value;
  }

  get imgPath() {
    return this.listLanguage.find(el => el.id === this.currentLanguage);
  }

}
