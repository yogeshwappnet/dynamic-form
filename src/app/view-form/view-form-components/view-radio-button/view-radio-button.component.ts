import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-radio-button',
  templateUrl: './view-radio-button.component.html',
  styleUrls: ['./view-radio-button.component.scss']
})
export class ViewRadioButtonComponent implements OnInit, OnChanges {
  options: any = [];
  @Input() item: any;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) {
      this.options = this.item.elementProperties.value.split(", ");
    }
  }
}