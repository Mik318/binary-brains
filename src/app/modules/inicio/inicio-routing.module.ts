import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BbInicioComponent} from "./components/bb-inicio/bb-inicio.component";

const routes: Routes = [
  {
    path: '',
    component: BbInicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
