import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import {ConfirmationDialogService} from "@dialog-test/dialog";


@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule  // Ensure MatDialogModule is imported here
  ],
  providers: [ConfirmationDialogService],  // Provide the service here
  selector: 'dialog-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog, private confirmationDialogService: ConfirmationDialogService) {}

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogTestExampleDialogComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  showAlert() {
    this.confirmationDialogService.openAlertDialog('Alert', 'This is an alert dialog.').subscribe(result => {
      if (result) {
        console.log('Alert confirmed');
      } else {
        console.log('Alert cancelled');
      }
    });
  }

  showWarning() {
    this.confirmationDialogService.openWarningDialog('Warning', 'This is a warning dialog.').subscribe(result => {
      if (result) {
        console.log('Warning confirmed');
      } else {
        console.log('Warning cancelled');
      }
    });
  }

  showInformation() {
    this.confirmationDialogService.openInformationDialog('Information', 'This is an information dialog.').subscribe(result => {
      if (result) {
        console.log('Information confirmed');
      } else {
        console.log('Information cancelled');
      }
    });
  }

  showCustomDialog() {
    this.confirmationDialogService.openCustomDialog('Custom', 'This is a custom dialog.', 'favorite').subscribe(result => {
      if (result) {
        // Handle confirm action
        console.log('Custom dialog confirmed');
      } else {
        // Handle cancel action
        console.log('Custom dialog cancelled');
      }
    });
  }
}
