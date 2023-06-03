import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { Subscription } from 'rxjs';
import { IReportCount } from '../../../interfaces/report-counts-interface';
import { cardTypeValue } from 'src/app/shared/interfaces/components-interface';
import { IListSummary } from '../../../interfaces/summary-interface';

@Component({
  selector: 'app-report-counts-instagram',
  templateUrl: './report-counts-instagram.component.html',
  styleUrls: ['./report-counts-instagram.component.scss']
})
export class ReportCountsInstagramComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  itemsCount: Array<keyof IListSummary> = ['reach', 'impressions', 'followers', 'ctr', 'clicks', 'reachPercentage', 'engagementRate', 'totalEngagements']
  itemsCost: Array<keyof IListSummary> = ['cpr', 'cpv', 'cpi', 'cpe'];
  percentItem: string[] = ['engagementRate'];
  listItem: IReportCount[] = [];
  listItemCost: IReportCount[] = [];
  isLoading = false;

  constructor(
    private reportsService: ReportsService,
  ) {
   }

  ngOnInit(): void {
    this.loadSummary();
  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
  }

  loadSummary(){
    this.isLoading = true;

    const subsSummary = this.reportsService.getSummary().subscribe({
      next: (res) => {
        this.itemsCount.forEach(el => {
          const data: IReportCount = {
            id: el,
            title: 'data.'+el,
            value: this.mappingData(res.summary[el]),
            type: this.typeData(el)
          }
      
          this.listItem.push(data);
        })
      
        this.itemsCost.forEach(el => {
          const dataCost: IReportCount = {
            id: el,
            title: 'data.'+el,
            value: this.mappingData(res.summary[el]),
            type: 'currency'         
          }
          
          this.listItemCost.push(dataCost);
        })        
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        this.isLoading = false;
      }
    })
      

    this.subscription.push(subsSummary);
  }

  mappingData(value: any): number{
    switch(typeof value){
      case 'string':
        return parseInt(value);
      case 'number':
        return value;
      default:
        return 0;
    }
  }

  typeData(value: string): cardTypeValue{
    if(this.percentItem.includes(value)){
      return 'percent';
    }

    return 'general';
  }
}
