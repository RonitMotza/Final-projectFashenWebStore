import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { LoginService } from '../login/login.service';
import { SaleService } from '../sale/sale.service';
import { StorageService } from '../storage/storage.service';

//import { RegisterService } from './Register.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [LoginService, SaleService]

})
export class AdminComponent implements OnInit {

  constructor(private http: Http, private serviceLogIn: LoginService, 
    private serviceSale: SaleService, private StoragesService:StorageService ) { }

  ngOnInit() {
      document.title= "Harmony - Admin"
  }
  private isUploadBtn: boolean = true;
  idToDelete: number;
  isFormShow2: boolean;
  name: string;
  LastName: string;
  Email: string;
  Birth: string;
  Address: string;
  isFormShow1: boolean;
  id: number;
  ItemName: string;
  ItemImage: string;
  Price: string;
  CustomersArray: any[];
  arItems: any[];
  ShowFormItem: boolean;
  index: number;
  ShowCustList: boolean;
  ShowItemsList: boolean;
  CategoryEdit: string;
  Category: string;
  ItemNameEdit: string;
  ItemImageEdit: string;
  PriceEdit: string;
  Stock :number;
  CategoryArr = ["Women", "Men", "Winter", "Sale"];

  UploadItem(myNgForm: any) {
   // window.alert("submitHandlerItem");
    const body = {
      ItemName: this.ItemName,
      ItemImage: this.Category + "/" + this.file.name,
      Category: this.Category,
      Price: this.Price,
     
    };

    const bodyForStorage = {
      ItemName: this.ItemName,
      StorageItem: this.Stock ,
      Category: this.Category,
    };

    this.ItemImage = this.file.name;
   
    const req = this.serviceSale.Post(body);


    req.subscribe(rsp => {
      if (rsp.status == 201) {

    const reqStorage = this.StoragesService.Post(bodyForStorage);
    reqStorage.subscribe(rsp1 => {   
      console.log(" ********** success To Storage: " + rsp1);
    },(errr) =>{  console.log("********* Erroor To Storage: " + errr);}) 
      
        console.log("success : " + rsp);
       
        console.log(body);
        this.AddItem();
        //this.arItems.push(body);
        this.Category = "";
        this.ItemName = "";
        this.Price = "";
        this.ItemImage = null;
        console.log("ARRAY ADD" + this.arItems);
       // window.alert("Upload Succeeded :) ");
         window.alert("The Item Has Added Succeessfully :)")

      }
      else {  window.alert("ERROR :("); console.log("server responded error : " + rsp); }
    },
      (err) => {
        console.log("error : " + err);
      }
    );
    
       

  }


  ShowItemAddForme() {
    this.ShowFormItem = !this.ShowFormItem
  }


  ShowCusTable() {

    this.ShowCustList = !this.ShowCustList;
    let req = this.serviceLogIn.Get();
    req.subscribe(rsp =>
      this.CustomersArray = rsp.json()
    )
  }


  showFormCust2(CustomersArray: any) {
    this.id = CustomersArray.Id;
 
    this.Email = CustomersArray.Email;
    
    this.isFormShow1 = !this.isFormShow1;
    //console.log(aryformUsers);
    console.log(CustomersArray)
  }

  FormEditCustomer(myNgForm: any) {

    const body = { Id: this.id, Email: this.Email};
    let Indexof = this.CustomersArray.indexOf(this.id);

    const req = this.serviceLogIn.Put(this.id, body);
    req.subscribe(rsp => {
      if (rsp.status == 201) {
        this.CustomersArray[Indexof] = myNgForm;
        console.log(this.arItems);
        console.log(Indexof)
        this.isFormShow2 = false;

        console.log("success : " + rsp);
      }
      else { console.log("server responded error : " + rsp); }
    },
      (err) => {
        console.log("error : " + err);
      }

    );
  }

  deleteCust(id: any) {
    this.index = id;
    const req = this.serviceLogIn.Delete(id);
    req.subscribe(rsp => {
      console.log("success : " + rsp);
      this.isFormShow1 = false;
      this.CustomersArray.splice(this.index, 1);
      console.log(this.index);
      console.log(rsp);
    },
      (err) => {
        console.log("Errror : " + err);
      });

  }

  ShowItemsTable() {

    this.ShowItemsList = !this.ShowItemsList;
    let req = this.serviceSale.Get();
    req.subscribe(rsp =>
      this.arItems = rsp.json()
    )
  }


  GetItemIdDelete(id: number) {
    this.idToDelete = id;
    console.log(this.idToDelete);
  }

  DeleteItem() {

    const req = this.serviceSale.Delete(this.idToDelete);
    req.subscribe(rsp => {
      console.log("success : " + rsp);
      this.isFormShow1 = false;
      this.arItems.splice(this.idToDelete, 1);
      console.log(this.idToDelete);
      console.log(rsp);
    },
      (err) => {
        console.log("Errror : " + err);
      });
  }

  showFormItems2(arItems: any) {

    this.id = arItems.Id;
    this.CategoryEdit = arItems.Category;
    this.ItemImageEdit = arItems.ItemImage;
    this.ItemNameEdit = arItems.ItemName;
    this.PriceEdit = arItems.Price;
  

    this.isFormShow2 = !this.isFormShow2;
    //console.log(aryformUsers);
    console.log(arItems)
  }
  FormEditItem(myNgForm: any) {

    const body = {
      Id: this.id,
      ItemName: this.ItemNameEdit,
      ItemImage: this.ItemImageEdit,
      Category: this.CategoryEdit,
      Price: this.PriceEdit,
     
      
    };

    let Indexof = this.arItems.indexOf(this.id);

    const req = this.serviceSale.Put(this.id, body);
    req.subscribe(rsp => {
      if (rsp.status == 200) {
        this.arItems[Indexof] = myNgForm;
        console.log(this.arItems);
        console.log(Indexof)
        this.isFormShow2 = false;

        console.log("success : " + rsp);
        window.alert("The Item Was Updated Successfully.")
      }
      else { console.log("server responded error : " + rsp); }
    },
      (err) => {
        console.log("error : " + err);
      }

    );
  }

  file: File;
  formData: FormData = new FormData();
  options: any;
  apiUrl1: string;

  //preper image data
  fileChange(event: any) {
  //  window.alert("fileChange");
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
      this.formData.append('uploadFile', this.file, this.Category + "\\" + this.file.name);
     // window.alert(this.Category);
      let headers = new Headers()

      this.options = new RequestOptions({ headers: headers });
      this.apiUrl1 = "http://localhost:54842/api/UpLoadFile/";

    }
  }

  //add file (image) to folder
  AddItem() {
    //window.alert("AddItem");
    this.http.post(this.apiUrl1, this.formData, this.options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      )
  }


}




