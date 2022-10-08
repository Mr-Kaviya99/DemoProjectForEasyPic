import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicles-context',
  templateUrl: './vehicles-context.component.html',
  styleUrls: ['./vehicles-context.component.scss']
})
export class VehiclesContextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPostAd(category: any) {
    this.router.navigate(['/home/post-ad/details'],{queryParams:{category: category}})
  }
}
