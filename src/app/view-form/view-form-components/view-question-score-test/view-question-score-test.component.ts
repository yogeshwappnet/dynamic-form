import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-question-score-test',
  templateUrl: './view-question-score-test.component.html',
  styleUrls: ['./view-question-score-test.component.scss']
})
export class ViewQuestionScoreTestComponent {
  @Input() item: any;
  score = 0;

  ngOnInit(){
    console.log(this.item);
  }

  calculateScore(){

  }
}
