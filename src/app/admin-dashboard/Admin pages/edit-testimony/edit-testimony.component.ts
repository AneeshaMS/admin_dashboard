import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-testimony',
  templateUrl: './edit-testimony.component.html',
  styleUrls: ['./edit-testimony.component.css']
})
export class EditTestimonyComponent implements OnInit {


  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile:any=null;
  fd=new FormData();

  constructor() { }

  createFormData(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.fd.append('image',this.selectedFile,this.selectedFile.name)
  }

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

Edittestimony=new FormGroup({
  name:new FormControl('',[Validators.required]),
  position:new FormControl('',[Validators.required]),
  Org:new FormControl('',[Validators.required]),
  testi:new FormControl('',[Validators.required]),
  title:new FormControl('',[Validators.required]),
  img:new FormControl('',[Validators.required])
  
})

get name()
{
  return this.Edittestimony.get('name');
}
get position()
{
  return this.Edittestimony.get('position');
}
get Org()
{
  return this.Edittestimony.get('Org');
}
get testi()
{
  return this.Edittestimony.get('testi');
}
get title()
{
  return this.Edittestimony.get('title');
}
get img()
{
  return this.Edittestimony.get('img');
}



edittestimony(){

}

  ngOnInit(): void {
  }

}
