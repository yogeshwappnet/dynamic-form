import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Output('closeClick') closeClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeClick.emit();
  }


}
