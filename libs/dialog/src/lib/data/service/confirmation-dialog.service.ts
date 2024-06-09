// confirmation-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AlertDialogComponent} from "../../features/alert-dialog/alert-dialog.component";
import {WarningDialogComponent} from "../../features/warning-dialog/warning-dialog.component";
import {InformationDialogComponent} from "../../features/information-dialog/information-dialog.component";
import {CustomDialogComponent} from "../../features/custom-dialog/custom-dialog.component";


@Injectable({
  providedIn: 'root'
})

export class ConfirmationDialogService {
  constructor(private dialog: MatDialog) {}

  openAlertDialog(title: string, description: string) {
    return this.dialog.open(AlertDialogComponent, {
      data: { title, description }
    }).afterClosed();
  }

  openWarningDialog(title: string, description: string) {
    return this.dialog.open(WarningDialogComponent, {
      data: { title, description }
    }).afterClosed();
  }

  openInformationDialog(title: string, description: string) {
    return this.dialog.open(InformationDialogComponent, {
      data: { title, description }
    }).afterClosed();
  }

  openCustomDialog(title: string, description: string, icon: string) {
    return this.dialog.open(CustomDialogComponent, {
      data: { title, description, icon }
    }).afterClosed();
  }
}
