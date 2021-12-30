import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

searchText:any;

testimonials=[
  {
    image:"",
    Name:"",
    Position:"",
    Organisation:"",
    CrsTitle:""
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
