import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppModules} from "./routing/app-module";
import {RouterUtils} from "./shared/models/routing/router-untils";
import {IncioRoutes} from "./modules/inicio/routing/inicio-routes";

const routes: Routes = [
  {
    path: AppModules.inicio.id,
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouterUtils.getRoute(AppModules.inicio, IncioRoutes.incio)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RouterUtils.getRoute(AppModules.inicio, IncioRoutes.incio)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
