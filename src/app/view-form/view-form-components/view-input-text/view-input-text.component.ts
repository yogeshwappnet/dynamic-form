import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-view-input-text',
  templateUrl: './view-input-text.component.html',
  styleUrls: ['./view-input-text.component.scss']
})
export class ViewInputTextComponent implements OnInit, OnChanges {
  @Output('valueChange') valueChange = new EventEmitter();

  @Input() item: any;

  textFormControl = new FormControl('');
  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item && this.item?.elementProperties?.isRequired) {
      this.textFormControl.setValidators([Validators.required])
    } else {
      this.textFormControl.clearValidators();
      this.textFormControl.updateValueAndValidity();
    }
  }

  handleChange() {
    this.valueChange.emit(this.textFormControl.value);
  }
}
