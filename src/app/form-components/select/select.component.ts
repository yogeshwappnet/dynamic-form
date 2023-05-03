import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {
  options: any = [];
  @Input() item: any;

  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.item){
      this.options = this.item.properties.value.split(", ");
    }
  }

  edit() {
    this.editClick.emit(this.item);
  }

  close() {
    this.closeClick.emit(this.item);
  }

}
