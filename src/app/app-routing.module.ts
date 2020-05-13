import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-dialog-module',
    loadChildren: () =>
      import('./lazy-dialog/lazy-dialog.module').then(
        (m) => m.LazyDialogModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
