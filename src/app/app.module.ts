import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Template2wayDBComponent } from './template2way-db/template2way-db.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { TemplateValidationErrorsComponent } from './template-validation-errors/template-validation-errors.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveErrorsComponent } from './reactive-errors/reactive-errors.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    Template2wayDBComponent,
    TemplateValidationComponent,
    TemplateValidationErrorsComponent,
    ReactiveFormComponent,
    ReactiveErrorsComponent,
    ReactiveFormBuilderComponent,
    NestedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
