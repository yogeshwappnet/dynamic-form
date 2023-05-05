import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTextAreaComponent } from './view-text-area.component';

describe('ViewTextAreaComponent', () => {
  let component: ViewTextAreaComponent;
  let fixture: ComponentFixture<ViewTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
