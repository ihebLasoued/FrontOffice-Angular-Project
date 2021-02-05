import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { user } from '../../shared/user';
import { UserService } from '../../shared/services/user.service';
import { StorageService } from 'src/app/shared/services/storage.service';
//import swal from 'sweetalert';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private userService:UserService,private storageService:StorageService) { }
user:user;
  ngOnInit(): void {
    this.user = new user();
  }
  userRegister = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),


  });

  signIn(){

  this.userService.register(this.userRegister.value).subscribe(data =>{
   // swal("Good job!", "Welcome", "success");
   console.log(data)
   this.storageService.saveToken(data['token']);
   this.storageService.saveUser(data);

    this.ngOnInit();
    },
      err => {
      //  swal("verify your email", "this email is used", "warning");
      }
);

  }

}
