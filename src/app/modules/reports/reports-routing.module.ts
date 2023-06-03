import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPageComponent } from './components/reports-page.component';
import { Channel } from 'src/app/interfaces/app-interface';

const routes: Routes = [
  { path: '', redirectTo: Channel.instagram, pathMatch: 'full' },
  { path: Channel.instagram, component: ReportsPageComponent },
  { path: Channel.youtube, component: ReportsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
