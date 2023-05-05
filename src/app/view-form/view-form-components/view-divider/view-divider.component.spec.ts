import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDividerComponent } from './view-divider.component';

describe('ViewDividerComponent', () => {
  let component: ViewDividerComponent;
  let fixture: ComponentFixture<ViewDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
