import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {
  componentsList = [
    {
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
      name: 'Chips',
      value: 'chips'
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
      value: 'slide Toggle'
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

  constructor() { }

  ngOnInit(): void {
  }

}
