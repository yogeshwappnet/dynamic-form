import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImageCanvasComponent } from './view-image-canvas.component';

describe('ViewImageCanvasComponent', () => {
  let component: ViewImageCanvasComponent;
  let fixture: ComponentFixture<ViewImageCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewImageCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewImageCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
