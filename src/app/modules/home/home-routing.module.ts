import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page-context/home-page/home-page.component";
import {SellAnItemComponent} from "./components/sell-an-item-context/sell-an-item/sell-an-item.component";
import {VehiclesContextComponent} from "./components/sell-an-item-context/sell-an-item/inner-items/vehicles-context/vehicles-context.component";
import {ElectronicsContextComponent} from "./components/sell-an-item-context/sell-an-item/inner-items/electronics-context/electronics-context.component";
import {PropertyContextComponent} from "./components/sell-an-item-context/sell-an-item/inner-items/property-context/property-context.component";
import {ServiceContextComponent} from "./components/sell-an-item-context/sell-an-item/inner-items/service-context/service-context.component";
import {AnimalsContextComponent} from "./components/sell-an-item-context/sell-an-item/inner-items/animals-context/animals-context.component";
import {PostAdFormComponent} from "./post-ad-form/post-ad-form/post-ad-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {
    path: 'sell-an-item', component: SellAnItemComponent, children: [
      {path: 'vehicles', component: VehiclesContextComponent},
      {path: 'electronics', component: ElectronicsContextComponent},
      {path: 'property', component: PropertyContextComponent},
      {path: 'service', component: ServiceContextComponent},
      {path: 'animals', component: AnimalsContextComponent}
    ]
  },
  {
    path: 'post-ad/details',component: PostAdFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
