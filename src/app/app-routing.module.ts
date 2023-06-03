import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathUrl } from './interfaces/app-interface';

const routes: Routes = [
  { path: '', redirectTo: PathUrl.reports, pathMatch: 'full' },
  {
    path: PathUrl.reports,
    loadChildren: () => import('./modules/reports/reports.module').then(mod => mod.ReportsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
