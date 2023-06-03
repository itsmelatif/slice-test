import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCountsInstagramComponent } from './report-counts-instagram.component';

describe('ReportCountsInstagramComponent', () => {
  let component: ReportCountsInstagramComponent;
  let fixture: ComponentFixture<ReportCountsInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCountsInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCountsInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
