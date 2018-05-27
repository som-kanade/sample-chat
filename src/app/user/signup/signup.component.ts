import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppService } from '../../app.service';


import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName:any;
  public lastName:any;
  public mobile:any;
  public email:any;
  public password:any;
  public apiKey:any;

  constructor(
    public appService:AppService,public router:Router,public toastr: ToastrService) { 
      
    }

  ngOnInit() {
  }

  public goToSignIn():any{
    this.router.navigate(['/']);
  } // goToSignIn closed


  public signupFunction():any{
    if(!this.firstName){
      this.toastr.warning("enter first name");
    }
    else if(!this.lastName){
      this.toastr.warning("enter last name");
    }
    else if (!this.mobile){
      this.toastr.warning("enter mombile number");
    }
    else if(!this.email){
      this.toastr.warning("enter mail adress");
    }
    else if(!this.password){
      this.toastr.warning("enter mail id");
    }
    else if(!this.apiKey){
      this.toastr.warning("enter api key");
    }
    else{
      let data = {
        firstName: this.firstName,
        lastName:this.lastName,
        mobile:this.mobile,
        email:this.email,
        password:this.password,
        apiKey:this.apiKey
      }
      console.log(data)
      this.appService.signUpFunction(data)
      .subscribe((apiResponse) => {
        console.log(apiResponse);

        if(apiResponse == 200){
          this.toastr.success("signUp Successfull");

          setTimeout(() => {

            this.goToSignIn();
          },2000);
        }
        else{
          this.toastr.error(apiResponse.error);
        }
      },(err) => {
        this.toastr.error("error in sign up Pls try again");
      });
    }
  }   // sign up function closed
}












