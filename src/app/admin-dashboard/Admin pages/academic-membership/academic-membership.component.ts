import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-academic-membership',
  templateUrl: './academic-membership.component.html',
  styleUrls: ['./academic-membership.component.css']
})
export class AcademicMembershipComponent implements OnInit {

  title="Academic Membership";

  // excelsheet

  fileName= 'ExcelSheet.xlsx'; 
  
  searchText:any; //search box

  academicappls = [
    { slno:"",
     memberid: "", 
     name: "", 
     website: ""
     }
    ]

  constructor() { }

 


  ngOnInit(): void {
  }

// excelsheet
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
