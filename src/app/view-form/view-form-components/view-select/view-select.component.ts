import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-select',
  templateUrl: './view-select.component.html',
  styleUrls: ['./view-select.component.scss']
})
export class ViewSelectComponent implements OnInit, OnChanges {
  options: any = [];
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.item){
      this.options = this.item.elementProperties.value.split(", ");
    }
  }
}