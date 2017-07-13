

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http'
import { IonicStorageModule } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProjectListPage } from './../pages/project-list/project-list';
import { ProjectListPageModule } from './../pages/project-list/project-list.module';
import { ProjectDetailPageModule } from './../pages/project-detail/project-detail.module';
import { ProjectService } from './services/project.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    ProjectListPageModule,
    ProjectDetailPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProjectListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JwtHelper,
    ProjectService,
    AuthenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  ]
})
export class AppModule {}
