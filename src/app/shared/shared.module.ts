import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicThemeComponent } from './components/dynamic-theme/dynamic-theme.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    TableComponent,
    TablePaginationComponent,
    TabsComponent,
    DynamicComponentDirective,
    FilterTableComponent,
    DynamicThemeComponent
   
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    LayoutComponent,
    CardComponent,
    TabsComponent,
    TableComponent,
    DynamicThemeComponent,
    TablePaginationComponent,
    FilterTableComponent,
    DynamicComponentDirective
  ]
})
export class SharedModule { }
