import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIndividualList } from '../../../interfaces/individual-list-interface';
import { ReportsService } from '../../../services/reports.service';
import { IFilterTable, IPagination } from 'src/app/shared/interfaces/components-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report-list-table-instagram',
  templateUrl: './report-list-table-instagram.component.html',
  styleUrls: ['./report-list-table-instagram.component.scss']
})
export class ReportListTableInstagramComponent implements OnInit, OnDestroy {
  columnTable = ['creatorName', 'postType', 'reach', 'impressions', 'views', 'clicks'];
  dataSourceTable: IIndividualList[] = [];
  subscription: Subscription[] = [];
  totalPages = 1;
  isLoading = false

  constructor(
    private reportsService: ReportsService,
  ) { }

  ngOnInit(): void {
    this.onLoadIndividualList();
  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
  }

  onLoadIndividualList(){
    this.isLoading = true;
    const subsList = this.reportsService.getIndividualList().subscribe({
      next: el => {
        this.dataSourceTable = el.individualList
        this.totalPages = el.totalPages
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.isLoading = false;
      }
    })

    this.subscription.push(subsList);
  }  

  onChangePagination(value: IPagination){
    console.log(value);
  }

  onSearch(value: IFilterTable){
    console.log(value);
  }


}
