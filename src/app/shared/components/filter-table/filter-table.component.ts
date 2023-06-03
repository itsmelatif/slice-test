import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IFilterTable } from '../../interfaces/components-interface';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ComponentConstant } from '../constant/component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit, OnDestroy {
  @Input() listSearch: string [] = [];
  @Output() search: EventEmitter<IFilterTable> = new EventEmitter<IFilterTable>();

  activeListDropdown = false
  valueList = '';
  searchValue = '';
  private debounceTimeout: Subject<any> = new Subject();
  private subscription: Subscription[] = [];

  constructor(
    private _translateService: TranslateService
  ) { }

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    const className = event.target.className;
    if(className === "form-control select" || className === "bi bi-chevron-down"){
      this.activeListDropdown = !this.activeListDropdown;
    }else{
      this.activeListDropdown = false
    }
  }

  ngOnInit(): void {
    this.valueList = this.getTranslate('field.'+this.listSearch[0]);
    const subs = this.debounceTimeout.pipe(debounceTime(ComponentConstant.debounceTimeFilter)).subscribe(() => {
      this.emitValue();
    });

    this.subscription.push(subs);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(el => el.unsubscribe());
  }

  onChangeSelect(value: string){
    this.valueList = this.getTranslate('field.'+value);
    this.emitValue();
  }

  onChangeText(value: string){
    this.searchValue = value;
    this.debounceTimeout.next();    
  }

  emitValue(){
    this.search.emit({
      searchValue: this.searchValue,
      searchBy: this.valueList
    })
  }

  getTranslate(value: string){
    return this._translateService.instant(value);
  }  

}
