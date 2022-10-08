import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-property-context',
  templateUrl: './property-context.component.html',
  styleUrls: ['./property-context.component.scss']
})
export class PropertyContextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPostAd(category: any) {
    this.router.navigate(['/home/post-ad/details'],{queryParams:{category: category}})
  }

}
