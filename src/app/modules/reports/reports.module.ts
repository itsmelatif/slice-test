import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsPageComponent } from './components/reports-page.component';
import { ReportCountsInstagramComponent } from './components/instagram/report-counts-instagram/report-counts-instagram.component';
import { ReportListTableInstagramComponent } from './components/instagram/report-list-table-instagram/report-list-table-instagram.component';
import { ReportCountsYoutubeComponent } from './components/youtube/report-counts-youtube/report-counts-youtube.component';
import { ReportListTableYoutubeComponent } from './components/youtube/report-list-table-youtube/report-list-table-youtube.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ReportsPageComponent,
    ReportCountsInstagramComponent,
    ReportListTableInstagramComponent,
    ReportCountsYoutubeComponent,
    ReportListTableYoutubeComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    TranslateModule    
  ]
})
export class ReportsModule { }
