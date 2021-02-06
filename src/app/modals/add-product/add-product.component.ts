import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public title = 'Dodawanie Produktu';
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public produkt: Produkt;

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
