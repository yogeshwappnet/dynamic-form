import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSlideToggleComponent } from './view-slide-toggle.component';

describe('ViewSlideToggleComponent', () => {
  let component: ViewSlideToggleComponent;
  let fixture: ComponentFixture<ViewSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSlideToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
