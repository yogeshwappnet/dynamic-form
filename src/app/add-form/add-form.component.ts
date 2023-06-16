import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { DropEffect } from 'ngx-drag-drop';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { FormService } from '../service/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {
  componentsList = [
    {
      name: 'Row 1',
      value: 'row-1'
    }, {
      name: 'Row 2',
      value: 'row-2'
    }, {
      name: 'Row 3',
      value: 'row-3'
    }, {
      name: 'Header',
      value: 'header'
    }, {
      name: 'Paragraph',
      value: 'paragraph'
    }, {
      name: 'Button',
      value: 'button'
    }, {
      name: 'Checkbox',
      value: 'checkbox'
    }, {
      name: 'Date Picker',
      value: 'datepicker'
    }, {
      name: 'Divider',
      value: 'divider'
    }, {
      name: 'Text Input',
      value: 'input-text'
    }, {
      name: 'Text Number',
      value: 'input-number'
    }, {
      name: 'Text Email',
      value: 'input-email'
    }, {
      name: 'Select',
      value: 'select'
    }, {
      name: 'Select Multiple',
      value: 'select-multi'
    }, {
      name: 'Text Area',
      value: 'text-area'
    }, {
      name: 'Radio Button',
      value: 'radio-button'
    }, {
      name: 'Slide Toggle',
      value: 'slide-toggle'
    }, {
      name: 'Signature',
      value: 'signature'
    }, {
      name: 'Image Canvas',
      value: 'image-canvas'
    }, {
      name: 'Content Editor',
      value: 'content-editor'
    }, {
      name: 'Question Score Test',
      value: 'question-score-test'
    },
  ]

  form: any = []

  dataForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    description: new UntypedFormControl('', Validators.required)
  })
  id = 0;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.getForm();
    }
  }

  getForm() {
    this.formService.getForm(this.id)
      .subscribe((res) => {
        // this. = res.formData;
        // this.formData.rows = res.rowData;

        this.dataForm.patchValue({
          name: res.formData.name,
          description: res.formData.description
        })

        res.rowData = res.rowData.map((row) => {
          row['name'] = row.rowType
          row['value'] = row.rowVal
          return row;
        })

        res.elementData = res.elementData.map((element) => {
          element['name'] = element.elementType
          element['value'] = element.elementVal
          if (element.elementProperties) {
            element['properties'] = JSON.parse(element.elementProperties)
          }
          return element;
        })

        this.form = res.rowData;


        this.form = this.form.map((row) => {
          let elements = res.elementData.filter((ele) => {
            if (ele.rowId == row.id) {
              return ele;
            }
          })
          row['children'] = elements;
          return row;
        })

        console.log(this.form);
      })

  }

  get f() {
    return this.dataForm.controls;
  }

  onDrop(event: any, item?: any) {
    if (item) {
      if (event.data.value == 'row-1' || event.data.value == 'row-2' || event.data.value == 'row-3') {
        this.toastr.error("You can't add a row to another row");
        return false;
      }
    } else {
      if (event.data.value != 'row-1' && event.data.value != 'row-2' && event.data.value != 'row-3') {
        this.toastr.error('Please add row and then add controls to the row');
        return false;
      }
    }

    if (item && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      if (item?.children?.length > 0) {
        item.children.push(event.data);
      } else {
        item['children'] = [];
        item.children.push(event.data);
      }
    } else {
      this.form.push(event.data);
    }

    return true;
  }

  editItem(item: any, rowIndex: any, colIndex: any) {
    console.log(item, rowIndex, colIndex)
    this.openDialog(item, rowIndex, colIndex, this.form)
  }

  removeRow(i: any, form: any) {
    form.splice(i, 1);
  }

  removeElement(colIndex: any, rowIndex: any) {
    this.form[rowIndex].children.splice(colIndex, 1)
  }

  openDialog(item: any, rowIndex: any, colIndex: any, form: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = item;

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        form[rowIndex]['children'][colIndex]['properties'] = result;
        this.form = JSON.parse(JSON.stringify(form));
      }
    });
  }

  onDragged(colIndex: any, rowIndex: any, effect: DropEffect) {
    if (effect === 'move') {
      this.form[rowIndex].children.splice(colIndex, 1)
    }
  }

  validateForm() {

    if (this.dataForm.valid) {
      if (this.form.length == 0) {
        this.toastr.error('Please add rows before saving form');
      }

      let isError = false
      this.form.forEach((row: any) => {
        if (!row?.children || row?.children?.length < 1) {
          this.toastr.error('Please remove the empty rows before saving the form')
          isError = true;
        } else {
          row.children.forEach((col: any) => {
            if (!col?.properties && col.value != 'divider') {
              this.toastr.error('Please set properties for all controls')
              isError = true
            }
          });
        }
      });

      if (isError) {
        return false;
      }

      let payload = {
        name: this.dataForm.value.name,
        description: this.dataForm.value.description,
        published: false,
        rows: this.form
      }


      if (this.id) {
        this.formService.updateForm(this.id, payload).subscribe((res) => {
          console.log(res);
          this.toastr.success('Form Updated');
          this.router.navigate(['/home'])
        })
      } else {
        this.formService.saveForm(payload).subscribe((res) => {
          console.log(res);
          this.toastr.success('Form Saved');
          this.router.navigate(['/home'])
        })
      }


    } else {
      this.dataForm.markAllAsTouched();
    }
    // call api to save form
    return true;
  }

}