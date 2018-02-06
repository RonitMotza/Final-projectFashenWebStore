import { Component, Input, OnInit, Output, EventEmitter ,OnChanges} from '@angular/core';
import { SaleService } from '../sale/sale.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LikesService } from '../Like/Like.service';
import { LoginService } from '../login/login.service';
import { AuthService } from '../auth.service';
import {CheckedGlobal} from '../checkedGlobal.service';
import {PipePipe} from '../pipe.pipe';


@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
  providers: [SaleService, LikesService, LoginService]
})
export class WomanComponent implements OnInit {
  ngOnInit() {
      document.title= "Harmony - Woman"
  }
  ItemId: number;
  arLikes: any;
  check: any[] = [];
  CustId: any;
  ProductWomen: any[] = [];
  Product: any[];
  router: any;
 isItLike:boolean;
 Likes:number;
  ExsistItem: boolean;
  IndexOfItemToSplice: number;
  checked:any;
cliced:any;

  constructor(private service: SaleService, _router: Router,
    private route: ActivatedRoute,
    private ServiceLike: LikesService, private serviceLogIn: LoginService, private authsreves: AuthService,private GS:CheckedGlobal) {
    this.router = _router;

  }




  isClick(Items) {
    Items.check = !Items.check;
    Items.checked = Items.check
    console.log(Items.check);
  }

  onClick(Items: any) {
    this.GS.WomenItemExist=false;
        this.GS.saleItemExist = false;
        this.GS.menItemExist = false;
        this.isClick(Items);

       console.log(Items);
    for (let index = 0; index < this.GS.checked.length; index++) {
      if (Items == this.GS.checked[index]) {
        console.log("seccses ");
        this.GS.WomenItemExist = true;
      }

    }
    if (!this.GS.WomenItemExist) {
       console.log(Items);
         this.GS.checked.push(Items);
    }
    else {
      this.IndexOfItemToSplice =  this.GS.checked.indexOf(Items);
       this.GS.checked.splice(this.IndexOfItemToSplice, 1);
          console.log("Splice",this.GS.checked);
    }
  
    console.log("End ",  this.GS.checked);
  }


  onClichOrder() {
    console.log(this.check);
    if ( this.GS.checked.length > 0) {
       this.router.navigate(['/orders']);
    }
    else {
      window.alert("You Have'nt Picked Any Items :( ");
    }

  }

  clickL(isLiked,Item: any) {
    console.log(isLiked);
    this.CustId = localStorage.getItem("IdCust");
    console.log(this.CustId );
    console.log(Item.Id + 'id Item Liked');
    console.log(Item);

    const body = {
      ItemId: Item.Id,
    //  CustomerId: this.CustIdItemName: this.ItemName,
     ItemName:Item.ItemName,
      ItemImage: Item.ItemImage,
      Category: Item.Category,
      Price: Item.Price,
      Stock:Item.Stock,
      Like:Item.Like +1,
    };

    const req = this.service.Put(Item.Id,body);
    req.subscribe(rsp => {
      if (rsp.status == 201) {
        console.log("success : " + rsp);
        console.log(body);
        Item.Like++;
      }
      else { console.log("server responded error : " + rsp); }
    },
      (err) => {
        console.log("error : " + err);
      }
    );

    
  }
}

