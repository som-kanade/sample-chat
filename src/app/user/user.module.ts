import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RouterModule,Routes } from '@angular/router';
import { ChatBoxComponent } from '../chat/chat-box/chat-box.component';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      {path:'signup',component:SignupComponent,pathMatch:'full'}
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
