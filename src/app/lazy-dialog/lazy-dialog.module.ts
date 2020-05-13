import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LazyDialogRoutingModule } from './lazy-dialog-routing.module';
import { LazyDialogContainerComponent } from './lazy-dialog-container.component';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';

@NgModule({
  declarations: [LazyDialogContainerComponent, LazyDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    LazyDialogRoutingModule,
  ],
})
export class LazyDialogModule {}
