import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import SignaturePad from "signature_pad";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  sig: SignaturePad;
  @Input() item: any;
  @Output('closeClick') closeClick = new EventEmitter();
  @Output('editClick') editClick = new EventEmitter();
  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);
  }

  clear() {
    this.sig.clear();
  }

  edit() {
    this.editClick.emit(this.item);
  }

  close() {
    this.closeClick.emit(this.item);
  }
}
