import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-admin-user',
  templateUrl: './view-admin-user.component.html',
  styleUrls: ['./view-admin-user.component.css']
})
export class ViewAdminUserComponent implements OnInit {

  adminUsers={
    image:"",
    Username:"",
    FName:"",
    LName:"",
    Email:"",
    Designation:""
  }


  constructor() { }

  ngOnInit(): void {
  }

}
