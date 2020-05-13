import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';

@Component({
  selector: 'app-lazy-dialog-container',
  template: ``,
})
export class LazyDialogContainerComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialog.open(LazyDialogComponent);
  }
}
