import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service : ServiceService) { }
  
  theFIGIInfo:any=[];
  

  ngOnInit(): void {
  }

  // button click event

  refreshFIGIInfoList(){
    this.service.getFIGIInformation().subscribe(data=>{
      this.theFIGIInfo = data;
    });
  }

}
