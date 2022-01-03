import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  title="Course Registered Users";
/*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  
searchText:any;

RegsiteredUsers=[{
  Course:"",
  Email:"",
  Name:"",
  Phone:"",
  Employed:"",
  RegisterdDate:"",
  Message:"",
}]
  constructor() { }

  ngOnInit(): void {
  }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
