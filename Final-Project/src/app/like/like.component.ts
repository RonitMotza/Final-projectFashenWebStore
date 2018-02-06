import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SaleService } from '../sale/sale.service';
import { AuthService } from '../auth.service';
import { LikesService } from '../Like/Like.service';


@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  providers: [LikesService]
})
export class LikeComponent implements OnInit {

  @Input() likesNumber: number;

  constructor(private service: SaleService, private authsreves: AuthService, private ServiceLike: LikesService) {

    let req3 = this.service.Get();
    req3.subscribe(rsp => {
      this.arItems = rsp.json();
       //console.log(this.arItems + "Liks Get");

    });
  }

  ngOnInit() {
  }

  ItemId: any;
  arLikes: any[];
  check: any[] = [];
  CustId: any;
  Product: any[];
  router: any;
  LiksArry: any[];
  //isItLike = true;
  id:number;
  Like:number;
  arItems:any;
  @Input() isItLike:boolean;
 @Input() Likes:number;
 @Output() Liked = new EventEmitter<boolean>();


 ClickLike() {
      this.isItLike = true;
      //this.CustId = localStorage.getItem("IdCust");
     // window.alert(this.CustId);
   this.Liked.emit(this.isItLike);
//this.Likes++;
    //const req = this.ServiceLike.Put(3, body);
    // r/eq.subscribe(rsp => {
    //   if (rsp.status == 200) {
    //     console.log(this.arItems);
    //     console.log( "body", body);
    //     console.log("success : " + rsp);
    //   }
    //   else { console.log("server responded error : " + rsp); }
    // },
    //   (err) => {
    //     console.log("error : " + err);
    //   }

 // );

    
    // else {
    //   this.likesNumber--;
    //   this.isItLike = true;
    // }

  }


//     ngOnChanges(c){
// console.log(c);
//   }


}
