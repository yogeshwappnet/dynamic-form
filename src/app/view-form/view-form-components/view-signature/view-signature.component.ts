import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-view-signature',
  templateUrl: './view-signature.component.html',
  styleUrls: ['./view-signature.component.scss']
})
export class ViewSignatureComponent {
  @Input() item: any;
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  
  sig: SignaturePad;
  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);
  }

  clear() {
    this.sig.clear();
  }
}
