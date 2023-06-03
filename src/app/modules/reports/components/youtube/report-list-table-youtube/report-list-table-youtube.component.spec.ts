import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListTableYoutubeComponent } from './report-list-table-youtube.component';

describe('ReportListTableYoutubeComponent', () => {
  let component: ReportListTableYoutubeComponent;
  let fixture: ComponentFixture<ReportListTableYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListTableYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListTableYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
