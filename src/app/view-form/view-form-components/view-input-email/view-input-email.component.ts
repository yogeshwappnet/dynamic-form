import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-input-email',
  templateUrl: './view-input-email.component.html',
  styleUrls: ['./view-input-email.component.scss']
})
export class ViewInputEmailComponent {
  @Input() item: any;
}
