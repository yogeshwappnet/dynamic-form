import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select-multi',
  templateUrl: './select-multi.component.html',
  styleUrls: ['./select-multi.component.scss']
})
export class SelectMultiComponent implements OnInit, OnChanges {
  options: any = [];
  @Input() item: any;

  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
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
