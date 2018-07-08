import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule, Dialog } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {GrowlModule} from 'primeng/growl';
import {PanelMenuModule} from 'primeng/panelmenu';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { GenerateListComponent } from './generate-list/generate-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    GenerateListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MenubarModule,
    BreadcrumbModule,
    DropdownModule,
    InputMaskModule,
    KeyFilterModule,
    CurrencyMaskModule,
    CheckboxModule,
    CalendarModule,
    FlexLayoutModule,
    AppRoutingModule,
    ConfirmDialogModule,
    PanelMenuModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }