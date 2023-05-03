import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ToastrService } from 'ngx-toastr';

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
    },
  ]

  form: any = []

  constructor(public dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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


}