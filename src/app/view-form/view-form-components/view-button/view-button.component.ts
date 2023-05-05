import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.scss']
})
export class ViewButtonComponent {
  @Input() item: any;

}
