import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

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
      name: 'Slider',
      value: 'slider'
    },
  ]

  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: "myDragData",
    effectAllowed: "copy",
    disable: false,
    handle: false
  };

  form: any = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDrop(event: any, item?: any) {
    if (item && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      if (item?.children?.length > 0) {
        item.children.push(event.data);
      } else {
        item['children'] = [];
        item.children.push(event.data);
      }
    }
  }

  editItem(i: any, form: any) {
    console.log(i)
    this.openDialog(i, form)
  }

  removeItem(i: any, form: any) {
    form.splice(i, 1);
  }


  openDialog(i: any, form: any) {
    const dialogRef = this.dialog.open(EditDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}