import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DatePipe } from '@angular/common';
import { Http } from '@angular/http';
import { CheckedGlobal } from "./checkedGlobal.service";
//import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  today: number = Date.now();
  title = 'app';
  name: string;
  email: string;
  IsAdmin = false;
  profile: string;
  Role = true;
  constructor(public auth: AuthService, private http: Http, private GS: CheckedGlobal) {
    this.auth.isAuthenticated();
    this.auth.handleAuthentication();
    auth.isAdmin();
   this.email= localStorage.getItem("email");
    
  }

  ngOnInit() {
     this.GS.GetAllItemsSale();
     this.GS.GetAllItemsMen();
     this.GS.GetAllItemsWomen();
  }

}
 let slideIndex = 0;
 let previosIndex = 0;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");


 setInterval(function () {

   previosIndex = slideIndex;
   slideIndex++;
   if (slideIndex >= slides.length) { slideIndex = 0, previosIndex = slides.length - 1 }  slides[previosIndex].className = slides[previosIndex].className.replace(" isActive", " notActive");
  dots[previosIndex].className = dots[previosIndex].className.replace(" active", "");
  slides[slideIndex].className = slides[slideIndex].className.replace(" notActive", " isActive");
 dots[slideIndex].className += " active";

 }, 2000);