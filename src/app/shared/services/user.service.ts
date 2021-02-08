import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Config} from "../config";
import { Credentials } from '../Credentials';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient/*,private storageService: StorageService*/) { }
  register( objectBody: any) {
    //const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.post(Config.userUrl + "/register", objectBody);
  }
  loginUser(credentials: Credentials) {
    return this.http.post(Config.userUrl + "/login", credentials);
  }
 /* saveUser(data: any) {

    localStorage.write(Config.tokenKey, 'Bearer ' + data.token);
  localStorage.write(Config.adminKey, data.user);
  }*/
  acheterProduit( idUser:number,idProduct,item:object) {
    //const headers = this.headers.set('Authorization', this.adminToken);
    return this.http.post(Config.userUrl + "/acheterProduct/"+idUser+"/"+idProduct,item);
  }
}
