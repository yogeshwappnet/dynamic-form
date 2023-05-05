import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-input-number',
  templateUrl: './view-input-number.component.html',
  styleUrls: ['./view-input-number.component.scss']
})
export class ViewInputNumberComponent {
  @Input() item: any;
}
