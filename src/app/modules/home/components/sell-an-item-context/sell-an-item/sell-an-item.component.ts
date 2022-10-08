import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-sell-an-item',
  templateUrl: './sell-an-item.component.html',
  styleUrls: ['./sell-an-item.component.scss']
})
export class SellAnItemComponent implements OnInit {
  vehicles: boolean = false;
  electronics: boolean = false;
  property: boolean = false;
  service: boolean = false;
  animals: boolean = false;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  setElectronicVisible() {
    this.vehicles = false;
    this.electronics =true;
    this.property= false;
    this.service=false;
    this.animals=false;
  }

  setVehiclesVisible() {
    this.vehicles = true;
    this.electronics =false;
    this.property= false;
    this.service=false;
    this.animals=false;
  }

  setPropertyVisible() {
    this.vehicles = false;
    this.electronics =false;
    this.property= true;
    this.service=false;
    this.animals=false;
  }

  setServiceVisible() {
    this.vehicles = false;
    this.electronics =false;
    this.property= false;
    this.service=true;
    this.animals=false;
  }

  setAnimalsVisible() {
    this.vehicles = false;
    this.electronics =false;
    this.property= false;
    this.service=false;
    this.animals=true;
  }
}
