import { Component, OnInit,Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service :ServiceService) { }

  // variables
  theSearch:string="";
  theFIGIInfo:any=[];
  theFIGIFIlterList:any=[];
  
  

  ngOnInit(): void {
    this.refreshList();
  }

  
  refreshList(){
    this.service.getFIGIInformation().subscribe(data=>{
      this.theFIGIInfo = data;
    });
  }

  //  //search/filter
   Filter(){
     var ltemp = this.theSearch.length >  0 ? this.theSearch.split(","): "";
     var lname = ltemp[0];
     var lticker = ltemp[1];
     var lfigi  = ltemp[2];
     
    this.theFIGIFIlterList = this.theFIGIInfo.filter(function(el:any){
      return el.name.toLowerCase().includes(
        lname.trim().toLowerCase()
      )&&
      el.name.toString().toLowerCase().includes(
        lticker.trim().toLowerCase()
      )&&
      el.name.toString().toLowerCase().includes(
        lfigi.trim().toLowerCase()
      )
    });
  }

}
