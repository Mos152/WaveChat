import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { MbscModule } from '@mobiscroll/angular';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MbscModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatInputModule
  ],
  

  declarations: [LoginPage]
})
export class LoginPageModule {}
