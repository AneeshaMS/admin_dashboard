import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-academic-membership',
  templateUrl: './academic-membership.component.html',
  styleUrls: ['./academic-membership.component.css']
})
export class AcademicMembershipComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx'; 
  searchText:any;

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
    heroes = [
      { slno:1, memberid: 11, name: 'Mr. Nice', website: 'India' },
      { slno:2, memberid: 12, name: 'gggvg', website: 'mhhhh' },
      { slno:3, memberid: 13, name: 'hvxss', website: 'chine' },
      { slno:4, memberid: 15, name: 'qijh', website: 'hkoghh' },
      { slno:5, memberid: 16, name: 'mnhxds', website: 'zfffg' },
      { slno:6, memberid: 14, name: 'wsas', website: 'innnn' }
    ]
}
