import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParagraphComponent } from './view-paragraph.component';

describe('ViewParagraphComponent', () => {
  let component: ViewParagraphComponent;
  let fixture: ComponentFixture<ViewParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
