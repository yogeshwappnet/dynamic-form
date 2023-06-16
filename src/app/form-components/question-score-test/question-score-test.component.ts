import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-score-test',
  templateUrl: './question-score-test.component.html',
  styleUrls: ['./question-score-test.component.scss']
})
export class QuestionScoreTestComponent {
  @Input() item: any;
  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();

  edit() {
    this.editClick.emit(this.item);
  }

  close() {
    this.closeClick.emit(this.item);
  }
}
