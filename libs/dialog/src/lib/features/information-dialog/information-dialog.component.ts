import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {WarningDialogComponent} from "../warning-dialog/warning-dialog.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'dialog-test-information-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule],
  template: `<div mat-dialog-title>
    <mat-icon>info_outline</mat-icon>
    {{ data.title }}
  </div>
  <div mat-dialog-content>
    {{ data.description }}
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onCancel()">Cancel</button>
    <button mat-button color="primary" (click)="onConfirm()">Confirm</button>
  </div>`,
  styles: [],
})
export class InformationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
