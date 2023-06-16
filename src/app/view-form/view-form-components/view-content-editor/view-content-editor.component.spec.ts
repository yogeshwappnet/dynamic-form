import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentEditorComponent } from './view-content-editor.component';

describe('ViewContentEditorComponent', () => {
  let component: ViewContentEditorComponent;
  let fixture: ComponentFixture<ViewContentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContentEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
