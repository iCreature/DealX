import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // APIURL
  readonly theAPIURL ="https://localhost:44339/api/OpenFIGI/";

  constructor(private http: HttpClient) { }

  // create a get function 
  // to get insformation from the rest api in .net

  // get
  getFIGIInformation():Observable<any[]>{
    return this.http.get<any[]>(this.theAPIURL+'getinformation/');
  }

  // post
  searchFIGIInformation(val:any){
    return this.http.post(this.theAPIURL+'/searchInformation/',val);
  }
  //https://github.com/iCreature/DealX.git

}
