import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRadioButtonComponent } from './view-radio-button.component';

describe('ViewRadioButtonComponent', () => {
  let component: ViewRadioButtonComponent;
  let fixture: ComponentFixture<ViewRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
