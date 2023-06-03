import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITabs } from 'src/app/shared/interfaces/components-interface';
import { ReportCountsInstagramComponent } from './instagram/report-counts-instagram/report-counts-instagram.component';
import { DynamicComponentDirective } from 'src/app/shared/directives/dynamic-component.directive';
import { ReportCountsYoutubeComponent } from './youtube/report-counts-youtube/report-counts-youtube.component';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from 'src/app/constant/app-constant';
import { Channel, PathUrl } from 'src/app/interfaces/app-interface';
import { ReportListTableInstagramComponent } from './instagram/report-list-table-instagram/report-list-table-instagram.component';
import { ReportListTableYoutubeComponent } from './youtube/report-list-table-youtube/report-list-table-youtube.component';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {
  @ViewChild(DynamicComponentDirective, { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  component_first = ReportCountsInstagramComponent
  componet_second = ReportListTableInstagramComponent;

  componentRef!: ComponentRef<ReportCountsInstagramComponent>;
  listChannel = AppConstant.LIST_CHANNEL;
  listTabs: ITabs[] = []
  activePath: string | undefined = Channel.instagram;

  laodComponent: {topComponent: any, bottomComponent: any} = {
    topComponent: ReportCountsInstagramComponent,
    bottomComponent: ReportListTableInstagramComponent
  }

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _translateService: TranslateService
  ) {
    this.listChannel.forEach((el, i) => {
      const data: ITabs = {
        id: el.id,
        title: el.title,
        active: i === 0
      }

      this.listTabs.push(data)
    })
  }

  ngOnInit(): void {
    this.activePath = this._activeRoute.routeConfig?.path; 
    this.laodComponent = this.getComponentsBaseOnPlatform(this.activePath);
    this.setActiveTabs(this.activePath);
  }

  setActiveTabs(value: string | undefined){
    this.listTabs = this.listTabs.map((el: ITabs, i) => {
      return {
        id: el.id,
        title: el.title,
        active: el.id === value
      }
    });
  }

  onClickTabs(value: ITabs){
    this._router.navigate([PathUrl.reports+'/'+value.id], { state: { activeTabs: value.id }})
  }

  getComponentsBaseOnPlatform(value: string | undefined): {topComponent: any, bottomComponent: any} {
    switch (value) {
      case Channel.youtube:
        return {
          topComponent: ReportCountsYoutubeComponent,
          bottomComponent: ReportListTableYoutubeComponent
        };
      default:
        return {
          topComponent: ReportCountsInstagramComponent,
          bottomComponent: ReportListTableInstagramComponent
        };
    }
  }  


  getTranslate(value: string){
    return this._translateService.instant(value);
  }

}
