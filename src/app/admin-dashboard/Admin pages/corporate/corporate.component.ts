import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  




  /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  

searchText:any;



  constructor() {}

 
  

  ngOnInit(): void {}

  
     
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
