import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from '../sale/sale.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CheckedGlobal } from '../checkedGlobal.service';
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [SaleService]
})
export class OrdersComponent implements OnInit {
  ngOnInit() {
    document.title = "Harmony - order"
    const reqForAllStorage = this.StorageService.Get();

    reqForAllStorage.subscribe(rspStorage => {
      this.StorageItemsArray = rspStorage.json()
    }
    )


  }

  AllPrices: number = 0;
  arry: any[];
  FormOrderShow = true;
  City: string;
  Phone: string;
  Street: string;
  Name: string;
  LastName: string;
  router: any;
  Payment: string;
  subject: string;
  titleMess = "";
  successMessage = "";
  successMessage1 = "";
  successMessage2 = "";
  notSuccessMessage = "";
  email = "ronit93motza@gmail.com";
  to = "ronit93motza@gmail.com";
  IndexOfItemToSplice: number;
  booldj: boolean = false;
  loaderShow = false;
  StorageItemsArray: any;


  constructor(private route: ActivatedRoute, private service: SaleService,
    private http: Http, _router: Router, private GS: CheckedGlobal,
    private StorageService: StorageService) {
    this.router = _router;
    let req = this.service.Get();

    req.subscribe(rsp => {
      for (var i = 0; i < this.GS.checked.length; i++) {
        this.AllPrices = this.AllPrices + this.GS.checked[i].Price;


      }

      console.log("Item selected", this.AllPrices)
      console.log("Item selected", this.GS.checked)
    }
    )

  }




  clickHandlerGet(arry: any) {
    console.log("Item to send ", this.GS.checked);
    const body = {
      Body: "Customer Name:  " + this.Name + "  " + this.LastName + ",    " +
      "Total Payment: " + this.AllPrices + ",    " + " Paymant : " + this.Payment + ",        " +
      "City: " + this.City + ",    " + "Street: " + this.Street + ",    " + "Phone Number:  " +
      this.Phone + ",          " + " Ditels: " + JSON.stringify(this.GS.checked), To: this.to, Subject: this.City +
      "   " + this.Name, From: this.email
    };

    const req = this.http.post("http://localhost:54842/api/ContactUs", body)
    this.loaderShow = true;
    this.FormOrderShow = false;
    req.subscribe(rsp => {

      if (rsp.status == 200) {
        this.booldj = true;
        this.loaderShow = false;

        for (var index = 0; index < this.GS.checked.length; index++) {

          for (var i = 0; i < this.StorageItemsArray.length; i++) {

            if (this.GS.checked[index].ItemName == this.StorageItemsArray[i].ItemName) {
              let IdItemStore = this.StorageItemsArray[i].Id;
              const bodyForStorage = {
                Id: IdItemStore,
                ItemName: this.StorageItemsArray[i].ItemName,
                StorageItem: this.StorageItemsArray[i].StorageItem,
                Category: this.StorageItemsArray[i].Category,
              };

              const reqStorage = this.StorageService.Put(IdItemStore, bodyForStorage);
              reqStorage.subscribe(rspStorage => {

                if (rspStorage.status == 200) {
                  this.GS.checked[index].checked = false;
                  this.GS.checked[index].check = false;
                }


                console.log("******", rspStorage)
              }, (error) => {
                console.log("ERRROR", error);
              })

            }



          }


          console.log(this.GS.checked[index].check, this.GS.checked[index].checked);

        }
        console.log("arrt2 : ", this.GS.checked);
        this.titleMess = "Thank You " + this.Name + "  " + this.LastName;
        this.successMessage = "Your Order Has Been Successfully Placed, in the next 24 we will contact you to the Phone Number -  " + this.Phone;
        this.successMessage1 = "H • A • R • M • O • N • Y,";
        this.successMessage2 = "By Yehudit & Ronit";
        this.City = "";
        this.Phone = "";
        this.Street = "";
        this.Name = "";
        this.Payment = "";
        this.GS.checked = [];
        this.FormOrderShow = false;
        console.log("success : " + rsp);

      }
      else {
        console.log("server responded error : " + rsp);
        this.notSuccessMessage = "ERROR !! one or more the Details are not full"

      }
    },
      (err) => {
        console.log("error : " + err);

      }
    );
  }



  hideErrorMsg() {
    this.router.navigate(['/home']);
  }
}






