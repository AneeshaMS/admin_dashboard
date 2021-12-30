import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {


  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;
  fd = new FormData();


  constructor() { }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }

  editcourseForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    describe:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    eligible:new FormControl('',[Validators.required]),
    fee:new FormControl('',[Validators.required]),
    entrance:new FormControl('',[Validators.required]),
    refund:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    delivery:new FormControl('',[Validators.required]),
    intern:new FormControl('',[Validators.required]),
    knowledge:new FormControl('',[Validators.required]),
    sponsour:new FormControl('',[Validators.required]),
   
  })

  editCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.editcourseForm.get('title');
  }
  get describe()
  {
    return this.editcourseForm.get('describe');
  }
  get status()
  {
    return this.editcourseForm.get('status');
  }
  get rate()
  {
    return this.editcourseForm.get('rate');
  }
  get category()
  {
    return this.editcourseForm.get('category');
  }
  get about()
  {
    return this.editcourseForm.get('about');
  }
  get date()
  {
    return this.editcourseForm.get('date');
  }
  get eligible()
  {
    return this.editcourseForm.get('eligible');
  }
  get fee()
  {
    return this.editcourseForm.get('fee');
  }
  get entrance()
  {
    return this.editcourseForm.get('entrance');
  }
  get refund()
  {
    return this.editcourseForm.get('refund');
  }
  get img()
  {
    return this.editcourseForm.get('img');
  }
  get delivery()
  {
    return this.editcourseForm.get('delivery');
  }
  get intern()
  {
    return this.editcourseForm.get('intern');
  }
  get knowledge()
  {
    return this.editcourseForm.get('knowledge');
  }
  get sponsour()
  {
    return this.editcourseForm.get('sponsour');
  }

  ngOnInit(): void {
  }

}


