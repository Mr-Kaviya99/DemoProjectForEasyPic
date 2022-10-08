import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-electronics-context',
  templateUrl: './electronics-context.component.html',
  styleUrls: ['./electronics-context.component.scss']
})
export class ElectronicsContextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPostAd(category: any) {
    this.router.navigate(['/home/post-ad/details'],{queryParams:{category: category}})
  }
}
