import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  controllerForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    label: new UntypedFormControl('', Validators.required),
    minimum: new UntypedFormControl('',),
    maximum: new UntypedFormControl('',),
    placeholder: new UntypedFormControl('',),
    helpText: new UntypedFormControl('',),
    value: new UntypedFormControl('',),
    description: new UntypedFormControl('',),
    isRequired: new UntypedFormControl(false,),
  })

  save() {
    let data = this.controllerForm.value;
    console.log(data);
    debugger;
  }

  get f() {
    return this.controllerForm.controls;
  }
}
