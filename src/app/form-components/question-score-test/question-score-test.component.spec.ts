import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoreTestComponent } from './question-score-test.component';

describe('QuestionScoreTestComponent', () => {
  let component: QuestionScoreTestComponent;
  let fixture: ComponentFixture<QuestionScoreTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionScoreTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionScoreTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
