
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProjectDetailPage } from './../project-detail/project-detail';
import { Project } from './../../assets/models/project';
import { Review } from './../../assets/models/review';
import { ProjectCard } from './../../assets/models/project-card';

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

  project1=new Project();
  selectedProject : Project;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project1.name="project1"
    this.project1.numberOfReviews=3
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }

  showDetails(project : Project){
    //this.selectedProject= project;
    this.navCtrl.push(ProjectDetailPage) //doit dépendre d'un project 

  }

}
