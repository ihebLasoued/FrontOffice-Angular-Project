import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=true;
  constructor(private storageService:StorageService) {
  }

  ngOnInit(): void {
    if(this.storageService.getUser()===null)
    {
     this.isLoggedIn = false;
    }

  }

}
