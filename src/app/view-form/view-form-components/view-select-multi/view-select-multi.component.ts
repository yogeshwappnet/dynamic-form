import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-select-multi',
  templateUrl: './view-select-multi.component.html',
  styleUrls: ['./view-select-multi.component.scss']
})
export class ViewSelectMultiComponent implements OnInit, OnChanges {
  options: any = [];
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.item){
      this.options = this.item.elementProperties.value.split(", ");
    }
  }

}