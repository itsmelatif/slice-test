import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISummary } from '../interfaces/summary-interface';
import { Endpoint } from '../constants/endpoint-constant';
import { IReportsDetail } from '../interfaces/individual-list-interface';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  getSummary(): Observable<ISummary> {
    return this._httpClient.get<ISummary>(Endpoint.summary);
  }

  getIndividualList(): Observable<IReportsDetail>{
    return this._httpClient.get<IReportsDetail>(Endpoint.individualList);
  }
}
