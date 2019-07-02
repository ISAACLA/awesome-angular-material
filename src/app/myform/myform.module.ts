import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyformComponent } from './myform.component';
import { MyformRouteModule } from './myform-route.module';

@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule, MyformRouteModule
  ]
})
export class MyformModule { }
