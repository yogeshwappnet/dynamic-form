import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-paragraph',
  templateUrl: './view-paragraph.component.html',
  styleUrls: ['./view-paragraph.component.scss']
})
export class ViewParagraphComponent {
  @Input() item: any;
}
