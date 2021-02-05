import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Credentials } from '../../shared/Credentials';
import { UserService } from '../../shared/services/user.service';
//import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router: Router,private storageService:StorageService) { }
  credentials: Credentials;
  ngOnInit(): void {
    this.credentials = new Credentials();
  }
  loginform = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])

  });
  get email() { return this.loginform.get('email'); }
  get password() { return this.loginform.get('password'); }
  login() {

  this.userService.loginUser(this.loginform.value).subscribe(data =>{
   this.storageService.saveUser(data);
   this.storageService.saveToken(data['token']);
    this.router.navigate(['/home'])

    },
      err => {
       // swal("are your sure", "check your informations", "warning");
      }
);
    }

}
