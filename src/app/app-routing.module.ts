import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "membros/:id",
    loadChildren: () =>
      import("./membros/membros.module").then((m) => m.MembrosPageModule),
  },
  {
    path: 'modal-deputado',
    loadChildren: () => import('./modal-deputado/modal-deputado.module').then( m => m.ModalDeputadoPageModule)
  },
  {
    path: 'modal-comida',
    loadChildren: () => import('./modal-comida/modal-comida.module').then( m => m.ModalComidaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
