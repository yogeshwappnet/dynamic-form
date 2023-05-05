import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-datepicker',
  templateUrl: './view-datepicker.component.html',
  styleUrls: ['./view-datepicker.component.scss']
})
export class ViewDatepickerComponent {
  @Input() item: any;

}
