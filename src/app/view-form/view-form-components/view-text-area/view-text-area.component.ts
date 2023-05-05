import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-text-area',
  templateUrl: './view-text-area.component.html',
  styleUrls: ['./view-text-area.component.scss']
})
export class ViewTextAreaComponent {
  @Input() item: any;
}
