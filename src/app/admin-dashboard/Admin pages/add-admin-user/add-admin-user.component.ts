import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-admin-user',
  templateUrl: './add-admin-user.component.html',
  styleUrls: ['./add-admin-user.component.css']
})
export class AddAdminUserComponent implements OnInit {

  public Editor = ClassicEditor;
  
  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  myFlagForSlideToggle: boolean = false;

  AdminUsers={
      username:"",
      firstname:"",
      lastname:"",
      email:"",
      designation:"",
      about:"",
      image:"",
      password:""
  }

  selectedFile:any=null;
 
  fd=new FormData();

  constructor() {}

  // image upload

  createFormData(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.fd.append('image',this.selectedFile,this.selectedFile.name)
  }
// image preview
  public imagePath:any;
 imgURL: any;
public message: string;
 preview(files:any) {
 if (files.length === 0)
  return;
 var mimeType = files[0].type;
 if (mimeType.match(/image\/*/) == null) {
  this.message = "Only images are supported.";
  return;
 }
 var reader = new FileReader();
 this.imagePath = files;
 reader.readAsDataURL(files[0]); 
 reader.onload = (_event) => { 
 this.imgURL = reader.result; 
}
}


// validation

AdduserForm=new FormGroup({
    usrname:new FormControl('',[Validators.required]),
    Fname:new FormControl('',[Validators.required]),
    Lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    designation:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required])
    
})

get usrname()
  {
    return this.AdduserForm.get('usrname');
  }
  get Fname()
  {
    return this.AdduserForm.get('Fname');
  }
  get Lname()
  {
    return this.AdduserForm.get('Lname');
  }
  get email()
  {
    return this.AdduserForm.get('email');
  }
  get designation()
  {
    return this.AdduserForm.get('designation');
  }
  get about()
  {
    return this.AdduserForm.get('about');
  }
  get image()
  {
    return this.AdduserForm.get('image');
  }
  get pwd()
  {
    return this.AdduserForm.get('pwd');
  }
  
 

addUser(){
  
}

  ngOnInit(): void {
  }

}
