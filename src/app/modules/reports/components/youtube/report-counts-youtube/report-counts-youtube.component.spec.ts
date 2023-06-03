import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCountsYoutubeComponent } from './report-counts-youtube.component';

describe('ReportCountsYoutubeComponent', () => {
  let component: ReportCountsYoutubeComponent;
  let fixture: ComponentFixture<ReportCountsYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCountsYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCountsYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
