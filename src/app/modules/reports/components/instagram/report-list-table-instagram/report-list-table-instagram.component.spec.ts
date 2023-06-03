import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListTableInstagramComponent } from './report-list-table-instagram.component';

describe('ReportListTableInstagramComponent', () => {
  let component: ReportListTableInstagramComponent;
  let fixture: ComponentFixture<ReportListTableInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListTableInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListTableInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
