import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Project } from './../../assets/models/project';
import { Review } from './../../assets/models/review';

/**
 * Generated class for the ProjectListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {

  project1 = new Project("sunny", "Projet 1");
  project2 = new Project("cloudy", "Projet 2");

  review1 = new Review("blablabal");
  review2 = new Review("bololol");

  reviews = [this.review1, this.review2]

  projects = [this.project1, this.project2]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }

}
