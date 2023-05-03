
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFormComponent } from './add-form/add-form.component';
import { HeaderComponent } from './form-components/header/header.component';
import { DividerComponent } from './form-components/divider/divider.component';
import { InputTextComponent } from './form-components/input-text/input-text.component';
import { MaterialExampleModule } from './material.module';
import { TextAreaComponent } from './form-components/text-area/text-area.component';
import { SliderComponent } from './form-components/slider/slider.component';
import { SlideToggleComponent } from './form-components/slide-toggle/slide-toggle.component';
import { SelectMultiComponent } from './form-components/select-multi/select-multi.component';
import { SelectComponent } from './form-components/select/select.component';
import { RadioButtonComponent } from './form-components/radio-button/radio-button.component';
import { ParagraphComponent } from './form-components/paragraph/paragraph.component';
import { InputNumberComponent } from './form-components/input-number/input-number.component';
import { DatepickerComponent } from './form-components/datepicker/datepicker.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { ButtonComponent } from './form-components/button/button.component';
import { InputEmailComponent } from './form-components/input-email/input-email.component';
import { DndModule } from 'ngx-drag-drop';
import { EditDialogComponent } from './add-form/edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    HeaderComponent,
    DividerComponent,
    InputTextComponent,
    InputEmailComponent,
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputNumberComponent,
    InputTextComponent,
    ParagraphComponent,
    RadioButtonComponent,
    SelectComponent,
    SelectMultiComponent,
    SlideToggleComponent,
    SliderComponent,
    TextAreaComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    DndModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
