import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { SaleService } from "./sale/sale.service";


@Injectable()
export class CheckedGlobal {
  checked: any[];
  saleItems: any[] = [];
  menItems: any[] = [];
  womenItems:any[]=[];
  //ExsistItem:boolean;
  WomenItemExist: boolean;
  saleItemExist: boolean;
  menItemExist: boolean;
  Product: any[];
  aa:any;
  constructor(private service: SaleService) {
    this.checked = [];
  }

  arr = [];



  ClickedChecked(a: any) {
    console.log(a + "a");
    this.checked = a;

    console.log(this.checked, "checked");

    this.arr.push(this.checked);
    console.log("array checked service", this.arr);

    localStorage.setItem('clicked', JSON.stringify(this.checked));
    console.log("new add");
    localStorage.getItem('clicked');

  }
  GetAllItemsSale() {
    let req = this.service.Get();
    req.subscribe(rsp => {
      this.Product = rsp.json()
      for (let i = 0; i < this.Product.length; i++) {
        if (this.Product[i].Category == "Sale") {
          let ProductSale = {
            ItemName: this.Product[i].ItemName,
            Category: this.Product[i].Category,
            ItemImage: this.Product[i].ItemImage,
            Price: this.Product[i].Price,
            // Like:this.Product[i].Like,
            check: false
          }

          this.saleItems.push(ProductSale);
        }

        //console.log(this.ProductSale);
      }
      (err) => { console.log("err" + err); }
    });

    console.log("ooooooo");
    console.log(this.saleItems);
  }
  GetAllItemsMen() {
    let req = this.service.Get();
    req.subscribe(rsp => {
      this.Product = rsp.json()
      for (let i = 0; i < this.Product.length; i++) {
        if (this.Product[i].Category == "Men") {
          let ProductMen = {
            ItemName: this.Product[i].ItemName,
            Category: this.Product[i].Category,
            ItemImage: this.Product[i].ItemImage,
            Price: this.Product[i].Price,
          
            check: false
          }

          this.menItems.push(ProductMen);
        }

        //console.log(this.ProductSale);
      }
      (err) => { console.log("err" + err); }
    });

    console.log("ooooooo");
    console.log(this.menItems);
  }

GetAllItemsWomen(){
   let req = this.service.Get();
    req.subscribe(rsp => {
      this.Product = rsp.json()
      for (let i = 0; i < this.Product.length; i++) {
        if (this.Product[i].Category == "Women") {
          let ProductWomen = {
            ItemName: this.Product[i].ItemName,
            Category: this.Product[i].Category,
            ItemImage: this.Product[i].ItemImage,
            Price: this.Product[i].Price,
            //  Like:this.Product[i].Like,
            check: false
          }

          this.womenItems.push(ProductWomen);
        }

        //console.log(this.ProductSale);
      }
      (err) => { console.log("err" + err); }
    });

    console.log("ooooooo");
    console.log(this.womenItems);
}



}












