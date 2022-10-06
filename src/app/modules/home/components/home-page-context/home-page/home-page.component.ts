import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public route: Router
  ) {
  }

  ngOnInit(): void {
  }

  loadSellAnItem() {
    this.route.navigate(['/home/sell-an-item'])
  }
}
