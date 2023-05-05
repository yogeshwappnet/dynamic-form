import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-checkbox',
  templateUrl: './view-checkbox.component.html',
  styleUrls: ['./view-checkbox.component.scss']
})
export class ViewCheckboxComponent {
  @Input() item: any;
}
