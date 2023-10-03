import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
