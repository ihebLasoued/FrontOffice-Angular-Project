import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Config} from "../config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register( objectBody: any) {
    //const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.post(Config.userUrl + "/register", objectBody);
  }
}
