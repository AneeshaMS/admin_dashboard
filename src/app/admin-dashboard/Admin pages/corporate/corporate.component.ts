import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  

searchText:any;

cptmembership=[{
  Name:"qwert",
  Address:"qawszxdrfvghvhgvyugbhymokoptfrdc",
  Website:"tfrdrdrdfr.com",
  Head:"rdrtdhrf",
  Nature:"Asresdrfdesx",
  TypeOf:"TFTFtrf",
  IdNo:22,
  GST:3445,
  Date:"",
  ContactName:"fcgffd",
  Phone:12346878,
  Email:"htfdfcdd@gmail.com",
  TechSkill:"hvhgvgf",
  EmployeeCount:200,
  hire:"gvhgvg",
  Patent:"gvfgv",
  Collaborate:"hgfvgv",
  Details:"hgtrdtrt",
  AppliedDate:""
},
{
  Name:"uwert",
  Address:"zawszxdrfvghvhgvyugbhymokoptfrdc",
  Website:"mfrdrdrdfr.com",
  Head:"sdrtdhrf",
  Nature:"qsresdrfdesx",
  TypeOf:"cFTFtrf",
  IdNo:82,
  GST:9445,
  Date:"",
  ContactName:"mcgffd",
  Phone:92346878,
  Email:"utfdfcdd@mail.com",
  TechSkill:"avhgvgf",
  EmployeeCount:900,
  hire:"bvhgvg",
  Patent:"avfgv",
  Collaborate:"bgfvgv",
  Details:"qgtrdtrt",
  AppliedDate:2021-11-24
}
]

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
