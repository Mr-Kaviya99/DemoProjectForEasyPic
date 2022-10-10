import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HomePageContextComponent} from './components/home-page-context/home-page-context.component';
import {SellAnItemContextComponent} from "./components/sell-an-item-context/sell-an-item-context.component";
import {HomePageComponent} from './components/home-page-context/home-page/home-page.component';
import {MatIconModule} from "@angular/material/icon";
import { SellAnItemComponent } from './components/sell-an-item-context/sell-an-item/sell-an-item.component';
import { VehiclesContextComponent } from './components/sell-an-item-context/sell-an-item/inner-items/vehicles-context/vehicles-context.component';
import { ElectronicsContextComponent } from './components/sell-an-item-context/sell-an-item/inner-items/electronics-context/electronics-context.component';
import { PropertyContextComponent } from './components/sell-an-item-context/sell-an-item/inner-items/property-context/property-context.component';
import { ServiceContextComponent } from './components/sell-an-item-context/sell-an-item/inner-items/service-context/service-context.component';
import { AnimalsContextComponent } from './components/sell-an-item-context/sell-an-item/inner-items/animals-context/animals-context.component';
import { PostAdFormComponent } from './post-ad-form/post-ad-form/post-ad-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DynamicFormFieldComponent } from './post-ad-form/post-ad-form/Inner-items/dynamic-form-field/dynamic-form-field.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomeComponent,
    SellAnItemContextComponent,
    HomePageContextComponent,
    HomePageComponent,
    SellAnItemComponent,
    VehiclesContextComponent,
    ElectronicsContextComponent,
    PropertyContextComponent,
    ServiceContextComponent,
    AnimalsContextComponent,
    PostAdFormComponent,
    DynamicFormFieldComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class HomeModule {
}
