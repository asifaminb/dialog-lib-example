import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dialog-test-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {}
