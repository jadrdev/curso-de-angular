import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  constructor(
  private dialogRef: MatDialogRef<ConfirmComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Heroe,) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  borrar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
