import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-player-missing-dialog',
  templateUrl: './player-missing-dialog.component.html',
  styleUrls: ['./player-missing-dialog.component.scss']
})
export class PlayerMissingDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<PlayerMissingDialogComponent>
    ) {}
}
