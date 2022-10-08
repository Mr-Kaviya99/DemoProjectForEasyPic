import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-animals-context',
  templateUrl: './animals-context.component.html',
  styleUrls: ['./animals-context.component.scss']
})
export class AnimalsContextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPostAd(category: any) {
    this.router.navigate(['/home/post-ad/details'],{queryParams:{category: category}})
  }
}
