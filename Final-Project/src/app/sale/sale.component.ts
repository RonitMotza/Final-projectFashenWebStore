import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SaleService } from './sale.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CheckedGlobal } from '../checkedGlobal.service';
import { AuthService } from '../auth.service';
import { PipePipe } from '../pipe.pipe';
//import {OrdersComponent} from '.Orders/component.ts';


@Component({
  selector: 'sale',
  templateUrl: './sale.component.html'

  ,
  styleUrls: ['./sale.component.css'],

  providers: [SaleService],

})
export class SaleComponent {
  //check: any[] = [];
  check: any[] = [];
  ProductSale: any[] = [];
  Product: any[];
  router: any;
  ExsistItem: boolean = false;
  IndexOfItemToSplice: number;
  isItLike: boolean;
  Likes: number;
  CustId: any;
  checked: any;
  cliced: any;
 
  ItemNumber: number;
  constructor(private service: SaleService, _router: Router, private route: ActivatedRoute, private GS: CheckedGlobal, private authsreves: AuthService) {
    this.router = _router;
  }

  ngOnInit() {
    document.title = "Harmony - SALE"
  }

  isClick(Items) {
    Items.check = !Items.check;
    Items.checked = Items.check
    console.log(Items.check);
  }

  onClick(Items: any) {
    console.log(Items.check);
    this.isClick(Items);

    this.GS.WomenItemExist = false;
    this.GS.saleItemExist = false;
    this.GS.menItemExist = false;
    console.log(Items);
    for (let index = 0; index < this.GS.checked.length; index++) {
      if (Items == this.GS.checked[index]) {
        console.log("seccses ");
        this.GS.saleItemExist = true;
      }

    }
    if (!this.GS.saleItemExist) {
      console.log(Items);
      this.GS.checked.push(Items);
    }
    else {
      this.IndexOfItemToSplice = this.GS.checked.indexOf(Items);
      this.GS.checked.splice(this.IndexOfItemToSplice, 1);
      console.log("Splice", this.GS.checked);
    }

    console.log("End ", this.GS.checked);
  }


  onClichOrder() {
    console.log(this.check);
    if (this.GS.checked.length > 0) {
      this.router.navigate(['/orders']);
    }
    else {
      window.alert("You Have'nt Picked Any Items :( ");
    }

  }


  clickL(isLiked, Item: any) {
    console.log(isLiked);
    this.CustId = localStorage.getItem("IdCust");
    console.log(this.CustId);
    console.log(Item.Id + 'id Item Liked');
    console.log(Item);

    const body = {
      ItemId: Item.Id,
      ItemName: Item.ItemName,
      ItemImage: Item.ItemImage,
      Category: Item.Category,
      Price: Item.Price,
      Stock: Item.Stock,
      Like: Item.Like + 1,
    };

    const req = this.service.Put(Item.Id, body);
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







