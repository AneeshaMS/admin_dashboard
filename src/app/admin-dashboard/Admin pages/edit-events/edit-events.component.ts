import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  public Editor = ClassicEditor;

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;
  fd = new FormData();

  editEvents={
    name:"",
    describe:"",
    about:"",
    date:"",
    coordinator:"",
    event:"",
    reglink:"",
    brouchure:"",
    prgmschedule:"",
    spklist:"",
    img:""
  }


  constructor() { }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }

   EditeventForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    describe:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    coordinator:new FormControl('',[Validators.required]),
    event:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    reglink:new FormControl('',[Validators.required]),
    brouchure:new FormControl('',[Validators.required]),
    prgmschedule:new FormControl('',[Validators.required]),
    spklist:new FormControl('',[Validators.required])
   
  })

  editevent()
  {
   console.warn("bhg");
  }


  get name()
  {
    return this.EditeventForm.get('name');
  }
  get describe()
  {
    return this.EditeventForm.get('describe');
  }
 
  get about()
  {
    return this.EditeventForm.get('about');
  }
  get date()
  {
    return this.EditeventForm.get('date');
  }
  get coordinator()
  {
    return this.EditeventForm.get('coordinator');
  }
  get event()
  {
    return this.EditeventForm.get('event');
  }
  get img()
  {
    return this.EditeventForm.get('img');
  }
  get reglink()
  {
    return this.EditeventForm.get('reglink');
  }
  get brouchure()
  {
    return this.EditeventForm.get('brouchure');
  }
  get prgmschedule()
  {
    return this.EditeventForm.get('prgmschedule');
  }
  get spklist()
  {
    return this.EditeventForm.get('spklist');
  }
 
 


  ngOnInit(): void {
  }

}
