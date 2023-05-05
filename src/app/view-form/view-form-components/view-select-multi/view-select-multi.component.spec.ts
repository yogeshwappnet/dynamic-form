import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectMultiComponent } from './view-select-multi.component';

describe('ViewSelectMultiComponent', () => {
  let component: ViewSelectMultiComponent;
  let fixture: ComponentFixture<ViewSelectMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSelectMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
