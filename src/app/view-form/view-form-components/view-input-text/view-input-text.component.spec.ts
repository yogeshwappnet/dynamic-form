import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInputTextComponent } from './view-input-text.component';

describe('ViewInputTextComponent', () => {
  let component: ViewInputTextComponent;
  let fixture: ComponentFixture<ViewInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
