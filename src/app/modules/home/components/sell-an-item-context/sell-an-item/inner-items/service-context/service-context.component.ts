import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-context',
  templateUrl: './service-context.component.html',
  styleUrls: ['./service-context.component.scss']
})
export class ServiceContextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPostAd(category: any) {
    this.router.navigate(['/home/post-ad/details'],{queryParams:{category: category}})
  }
}
