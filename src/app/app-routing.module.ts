import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: 'add',
    component: AddFormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
