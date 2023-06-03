import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentConstant } from '../constant/component';
import { IPagination } from '../../interfaces/components-interface';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Input() totalPages = 1
  @Input() activePage = ComponentConstant.activeStartPage;
  @Input() length = 0;
  @Output() changePagination: EventEmitter<IPagination> = new EventEmitter<IPagination>();

  listPage: number[] = [];
  listPageNumbers = ComponentConstant.listPagination;
  maxPages = ComponentConstant.maxSizes;
  activePageNumber = ComponentConstant.listPagination[0];

  constructor() { }

  ngOnInit(): void {
    this.listPage = Array.from({ length: this.totalPages }, (value, index) => index);
  }

  emitChangePagination(){
    this.changePagination.emit({
      pageNumber: this.activePage,
      pageSize: this.activePageNumber  
    });    
  }

  onChangeListPage(value: string){
    this.activePageNumber = parseInt(value);
    this.activePage = 0;
    this.emitChangePagination();
  }

  onNextPage(toLastPage?: boolean){
    if(this.lastPages) return;

    if(toLastPage){
      this.activePage = this.totalPages-1;
      this.emitChangePagination();
      return;
    }

    this.activePage = this.activePage+1;
    this.emitChangePagination();
    return 
  }

  onPrevPage(toFirstPage?: boolean){
    if(this.firstPage) return;

    if(toFirstPage){
      this.activePage = 0;
      this.emitChangePagination();
      return;
    }

    this.activePage = this.activePage - 1;
    this.emitChangePagination();
    return;
  }

  get lastPages(): boolean {
    return this.activePage === this.totalPages-1;
  }

  get firstPage(): boolean {
    return this.activePage === 0;
  }

  get currentlistPage(): number[]{
    if(this.activePage > 2){
      return this.listPage.slice(this.activePage-2 , this.activePage+3);  
    }

    return this.listPage.slice(0 , this.maxPages);
  }

  get showing(): { current: number, to: number, of: number}{
    return {
      current: (this.activePage*this.activePageNumber) + 1,
      to: this.activePage+1*this.activePageNumber,
      of: this.length
    }
  }
}
