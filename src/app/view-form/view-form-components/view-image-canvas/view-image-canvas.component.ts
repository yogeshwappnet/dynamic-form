import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-view-image-canvas',
  templateUrl: './view-image-canvas.component.html',
  styleUrls: ['./view-image-canvas.component.scss']
})
export class ViewImageCanvasComponent {
  @Input() item: any;
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  sig: SignaturePad;
  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.fromDataURL(this.item.elementProperties.image);
  }

  clear() {
    this.sig.clear();
    this.sig.fromDataURL(this.item.elementProperties.image);
  }
}
