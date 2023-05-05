import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private formService: FormService) { }

  displayedColumns: string[] = ['Id', 'name', 'description', 'published'];

  ngOnInit() {
    this.formService.getAllForms().subscribe((res) => {
      console.log(res);
    })
  }
}
