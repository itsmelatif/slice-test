import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicThemeComponent } from './dynamic-theme.component';

describe('DynamicThemeComponent', () => {
  let component: DynamicThemeComponent;
  let fixture: ComponentFixture<DynamicThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
