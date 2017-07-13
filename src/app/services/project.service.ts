
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {apiUrl} from '../app.config';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProjectService {
    constructor(private http: Http, private authService : AuthenticationService) {}
     
     
    jwt() : RequestOptions {
        let headers = new Headers({ 'authorization':'Bearer '+this.authService.getToken() });            
        let options = new RequestOptions({ headers: headers })
        return options
        }
     

   

    getProjectsBySession(session_id : String): Observable<any> {
        return this.http.get(apiUrl+`/project/${session_id}`, this.jwt()).map(res=>res.json())
    }

    getProjectById(project_id: String): Observable<any> {
        return this.http.get(apiUrl+`project/general/${project_id}`, this.jwt()).map(res=>res.json())
    }

    getReviewsByProject(project_id: String): Observable<any> { //avec un peu de chance y'aura une route importante reviews
        return this.http.get(apiUrl+`project/reviews/${project_id}`, this.jwt()).map(res=>res.json())
    }

}