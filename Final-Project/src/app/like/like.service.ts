import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';

export class LikesService {
    private url: string;
  // private Id:number;
   Get() {
        return this.http.get(this.url);
    }
Post(body: any ) {
   
return this.http.post(this.url , body)
}

Put(id:any,body: any) {
    
return this.http.put(this.url+id,body);
}

Delete(id:any){
 
 console.log(id);
 return this.http.delete(this.url+id);
 
}
    constructor( @Inject(Http) private http: Http) {
         this.url = "http://localhost:54842/api/Rating/";
    }


    
}