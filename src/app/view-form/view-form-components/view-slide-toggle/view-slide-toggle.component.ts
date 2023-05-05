import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-slide-toggle',
  templateUrl: './view-slide-toggle.component.html',
  styleUrls: ['./view-slide-toggle.component.scss']
})
export class ViewSlideToggleComponent {
  @Input() item: any;

}
