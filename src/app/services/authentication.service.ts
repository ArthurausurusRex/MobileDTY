import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Storage} from '@ionic/storage';

import {apiUrl} from '../app.config';
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private storage : Storage, private jwtHelper : JwtHelper) { }

    login(mail: String, password: String) : Observable<any> {
		return this.http.post(apiUrl+'/login?', { mail: mail, password: password })
            .map((response: Response) => {
                console.log(response)
                let token = response;
                if (token) {
                    this.saveToken(token);
                            }
                        },
            );
	}

    saveToken(token) : void {   
        this.storage.set('userToken', token);
        this.storage.set('currentUser', this.jwtHelper.decodeToken(token));
        console.log(this.jwtHelper.decodeToken(token))
    }


    logout():void {
        this.storage.remove('userToken')
    }

    getToken(){
       return this.storage.get('userToken')
    }

    currentUser(){
       this.getToken().then()
    }

}