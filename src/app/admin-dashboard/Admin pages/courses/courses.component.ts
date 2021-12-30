import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title="Courses"

  searchText:any;
  
  courses=[{
    image:"",
    name:"",
    category:"",
    fees:"",
    description:""
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
