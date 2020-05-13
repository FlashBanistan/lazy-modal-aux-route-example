import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyDialogContainerComponent } from './lazy-dialog-container.component';

const routes: Routes = [
  {
    /* your lazy loaded module route needs to be named */
    path: 'lazy-dialog',
    children: [
      {
        path: 'dialog',
        component: LazyDialogContainerComponent,
        outlet: 'modal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyDialogRoutingModule {}
