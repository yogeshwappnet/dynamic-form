import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInputNumberComponent } from './view-input-number.component';

describe('ViewInputNumberComponent', () => {
  let component: ViewInputNumberComponent;
  let fixture: ComponentFixture<ViewInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
