import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  public Editor = ClassicEditor;

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;
  fd = new FormData();

  addEvents={
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

  AddeventForm=new FormGroup({
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

  addevent()
  {
   console.warn("bhg");
  }


  get name()
  {
    return this.AddeventForm.get('name');
  }
  get describe()
  {
    return this.AddeventForm.get('describe');
  }
 
  get about()
  {
    return this.AddeventForm.get('about');
  }
  get date()
  {
    return this.AddeventForm.get('date');
  }
  get coordinator()
  {
    return this.AddeventForm.get('coordinator');
  }
  get event()
  {
    return this.AddeventForm.get('event');
  }
  get img()
  {
    return this.AddeventForm.get('img');
  }
  get reglink()
  {
    return this.AddeventForm.get('reglink');
  }
  get brouchure()
  {
    return this.AddeventForm.get('brouchure');
  }
  get prgmschedule()
  {
    return this.AddeventForm.get('prgmschedule');
  }
  get spklist()
  {
    return this.AddeventForm.get('spklist');
  }
 

  ngOnInit(): void {
  }


}
