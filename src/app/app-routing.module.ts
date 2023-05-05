import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ListComponent } from './form-list/list.component';
import { ViewFormComponent } from './view-form/view-form.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'add',
    component: AddFormComponent
  }, {
    path: 'edit/:id',
    component: AddFormComponent
  }, {
    path: 'home',
    component: ListComponent
  }, {
    path: 'view/:id',
    component: ViewFormComponent
  }]
}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
