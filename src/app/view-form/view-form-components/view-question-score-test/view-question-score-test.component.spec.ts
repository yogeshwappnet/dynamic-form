import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionScoreTestComponent } from './view-question-score-test.component';

describe('ViewQuestionScoreTestComponent', () => {
  let component: ViewQuestionScoreTestComponent;
  let fixture: ComponentFixture<ViewQuestionScoreTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuestionScoreTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuestionScoreTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
