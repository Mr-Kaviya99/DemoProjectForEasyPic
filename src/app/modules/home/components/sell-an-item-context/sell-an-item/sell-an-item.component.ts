import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sell-an-item',
  templateUrl: './sell-an-item.component.html',
  styleUrls: ['./sell-an-item.component.scss']
})
export class SellAnItemComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  navigateToRoute(link: string) {
    this.router.navigate(['/home/sell-an-item/' + link])
  }
}
