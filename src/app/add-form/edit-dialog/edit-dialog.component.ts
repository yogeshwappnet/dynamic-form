import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  controllerForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    label: new UntypedFormControl(''),
    minimum: new UntypedFormControl('',),
    maximum: new UntypedFormControl('',),
    placeholder: new UntypedFormControl('',),
    helpText: new UntypedFormControl('',),
    value: new UntypedFormControl('',),
    description: new UntypedFormControl('',),
    isRequired: new UntypedFormControl(false,),
    content: new UntypedFormControl('',),
  })

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    if (this.data?.properties) {
      this.controllerForm.patchValue({
        name: this.data.properties.name,
        label: this.data.properties.label,
        minimum: this.data.properties.minimum,
        maximum: this.data.properties.maximum,
        placeholder: this.data.properties.placeholder,
        helpText: this.data.properties.helpText,
        value: this.data.properties.value,
        description: this.data.properties.description,
        isRequired: this.data.properties.isRequired,
        content: this.data.properties.isRequired,
      })
    }
  }


  save() {
    if (this.controllerForm.valid) {
      let data = this.controllerForm.value;
      this.dialogRef.close(data);
      this.data = null;
    }
  }

  get f() {
    return this.controllerForm.controls;
  }
}
