import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HomePageContextComponent} from './components/home-page-context/home-page-context.component';
import {SellAnItemContextComponent} from "./components/sell-an-item-context/sell-an-item-context.component";
import {HomePageComponent} from './components/home-page-context/home-page/home-page.component';
import {MatIconModule} from "@angular/material/icon";
import { SellAnItemComponent } from './components/sell-an-item-context/sell-an-item/sell-an-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    SellAnItemContextComponent,
    HomePageContextComponent,
    HomePageComponent,
    SellAnItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ]
})
export class HomeModule {
}
