import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ListComponent } from './list/list.component';

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
    path: 'home',
    component: ListComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
