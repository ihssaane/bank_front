import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule, PageFooterModule } from '../../../shared';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageFooterModule,
    PageHeaderModule
  ]
})
export class HomeModule { }
