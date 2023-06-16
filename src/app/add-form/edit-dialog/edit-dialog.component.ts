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
    minimum: new UntypedFormControl(''),
    maximum: new UntypedFormControl(''),
    placeholder: new UntypedFormControl(''),
    helpText: new UntypedFormControl(''),
    value: new UntypedFormControl(''),
    description: new UntypedFormControl(''),
    isRequired: new UntypedFormControl(false),
    content: new UntypedFormControl(''),
    image: new UntypedFormControl(''),
    questions: new UntypedFormControl('')
  })

  questionArr = [];

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
        content: this.data.properties.content,
        image: this.data.properties.image,
        questions: this.data.properties.questions,
      })
      this.questionArr = this.data.properties.questions;
    }
  }


  save() {
    if (this.controllerForm.valid) {
      this.controllerForm.patchValue({
        questions: this.questionArr
      })
      let data = this.controllerForm.value;
      this.dialogRef.close(data);
      this.data = null;
    }
  }

  get f() {
    return this.controllerForm.controls;
  }

  async uploadImage(event) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file);
      let f = await this.toBase64(file);
      this.controllerForm.patchValue({
        image: f
      })
    }
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  addQuestion() {
    this.questionArr.push({ question: '', answer1: '', answer2: '' })
  }
}
