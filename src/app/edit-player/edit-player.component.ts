import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {
  allProfilePictures = [
    'profile1',
    'profile2',
    'profile3',
    'profile4',
    'profile5',
    'profile6',
    'profile7',
    'profile8',
  ];

  constructor(private dialogRef: MatDialogRef<EditPlayerComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
