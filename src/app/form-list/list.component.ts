import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private formService: FormService, private router: Router) { }

  displayedColumns: string[] = ['id', 'name', 'description', 'published'];
  dataSource: any = []
  ngOnInit() {
    this.formService.getAllForms().subscribe((res) => {
      this.dataSource = res;
    })
  }

  viewForm(id) {
    this.router.navigate([`view/${id}`])
  }
}
