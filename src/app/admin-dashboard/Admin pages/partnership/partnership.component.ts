import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  
searchText:any;

partnerAppls=[{
  Name:"",
  Email:"",
  Phone:"",
  Address:"",
  Firm:"",
  District:"",
  OfficeSpace:"",
  Report:"",
  Expectation:"",
  Profile:"",
  EmployeeCount:"",
  RegisterdDate:""

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
