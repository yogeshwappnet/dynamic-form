import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDatepickerComponent } from './view-datepicker.component';

describe('ViewDatepickerComponent', () => {
  let component: ViewDatepickerComponent;
  let fixture: ComponentFixture<ViewDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
