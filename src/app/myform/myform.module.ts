import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MyformComponent } from './myform.component';
import { MyformRouteModule } from './myform-route.module';

@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule, MyformRouteModule, FormsModule
  ]
})
export class MyformModule { }
