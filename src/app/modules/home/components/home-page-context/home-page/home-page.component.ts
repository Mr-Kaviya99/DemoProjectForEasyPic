import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SellAnItemComponent} from "../../sell-an-item-context/sell-an-item/sell-an-item.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public route: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }
  sellAnItemPopUp(event: MouseEvent): void {
    const dialogRef = this.dialog.open(SellAnItemComponent, {
      width: '1000px',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
    });
  }
}
