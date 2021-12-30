import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {


  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";


  selectedFile: any = null;
  formData: any = {};
  fd = new FormData();


  constructor() { }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }
 

  AddcourseForm=new FormGroup({
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

  addCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.AddcourseForm.get('title');
  }
  get describe()
  {
    return this.AddcourseForm.get('describe');
  }
  get status()
  {
    return this.AddcourseForm.get('status');
  }
  get rate()
  {
    return this.AddcourseForm.get('rate');
  }
  get category()
  {
    return this.AddcourseForm.get('category');
  }
  get about()
  {
    return this.AddcourseForm.get('about');
  }
  get date()
  {
    return this.AddcourseForm.get('date');
  }
  get eligible()
  {
    return this.AddcourseForm.get('eligible');
  }
  get fee()
  {
    return this.AddcourseForm.get('fee');
  }
  get entrance()
  {
    return this.AddcourseForm.get('entrance');
  }
  get refund()
  {
    return this.AddcourseForm.get('refund');
  }
  get img()
  {
    return this.AddcourseForm.get('img');
  }
  get delivery()
  {
    return this.AddcourseForm.get('delivery');
  }
  get intern()
  {
    return this.AddcourseForm.get('intern');
  }
  get knowledge()
  {
    return this.AddcourseForm.get('knowledge');
  }
  get sponsour()
  {
    return this.AddcourseForm.get('sponsour');
  }

  ngOnInit(): void {
  }

}
