
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectListPage } from './../project-list/project-list';
import { AuthenticationService } from './../../app/services/authentication.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username : String;
  password : String;
  error : String;

  constructor(public navCtrl: NavController, private authService : AuthenticationService) {

  }

  login(){
    this.authService.login(this.username,this.password).subscribe(
      data=>{
        this.navCtrl.setRoot(ProjectListPage);
      },
      err=>{
        console.log(err)
      }
    )

    
  }
}
