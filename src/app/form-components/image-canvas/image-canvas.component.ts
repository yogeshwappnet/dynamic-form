import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-image-canvas',
  templateUrl: './image-canvas.component.html',
  styleUrls: ['./image-canvas.component.scss']
})
export class ImageCanvasComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  sig: SignaturePad;
  @Input() item: any;
  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();
  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.fromDataURL(this.item.properties.image);
  }

  clear() {
    this.sig.clear();
    this.sig.fromDataURL(this.item.properties.image);
  }

  edit() {
    this.editClick.emit(this.item);
  }

  close() {
    this.closeClick.emit(this.item);
  }
}
