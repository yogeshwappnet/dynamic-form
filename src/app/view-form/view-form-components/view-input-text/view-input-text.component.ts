import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-input-text',
  templateUrl: './view-input-text.component.html',
  styleUrls: ['./view-input-text.component.scss']
})
export class ViewInputTextComponent {
  @Input() item: any;
}
