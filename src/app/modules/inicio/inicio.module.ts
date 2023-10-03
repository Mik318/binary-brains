import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { BbInicioComponent } from './components/bb-inicio/bb-inicio.component';
import {SharedModule} from "../../shared/models/modules/shared/shared/shared.module";


@NgModule({
  declarations: [
    BbInicioComponent
  ],
    imports: [
        CommonModule,
        InicioRoutingModule,
        SharedModule
    ]
})
export class InicioModule { }
