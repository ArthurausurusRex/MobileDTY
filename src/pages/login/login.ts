import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectListPage } from './../project-list/project-list';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username : String;
  password : String;
  error : String;

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.setRoot(ProjectListPage);
  }
}
