import { Component } from '@angular/core';
import { FormService } from '../service/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent {
  id: any = 0;
  formData: any;
  constructor(private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getForm();
  }

  getForm() {
    this.formService.getForm(this.id)
      .subscribe((res) => {
        this.formData = res.formData;
        this.formData.rows = res.rowData;

        res.elementData = res.elementData.map((ele) => {
          if (ele.elementProperties) {
            ele.elementProperties = JSON.parse(ele.elementProperties)
          }
          return ele;
        })

        this.formData.rows = this.formData.rows.map((row) => {
          let elements = res.elementData.filter((ele) => {
            if (ele.rowId == row.id) {
              return ele;
            }
          })
          row['children'] = elements;
          return row;
        })

        console.log(this.formData);
      })

  }

  handleValueChange(event: any){
    console.log(event);
  }
}
