import {Component, OnInit, Optional} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  email;
  resDateTime;
  howLong;

  constructor(@Optional() public dialogRef: MdDialogRef<ReservationDialogComponent>) { }

  ngOnInit() {
  }

}
