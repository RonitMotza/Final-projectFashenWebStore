import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private http: Http, public auth: AuthService) {

    let slideIndex = 0;
    let previosIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    setInterval(function () {

      previosIndex = slideIndex;
      slideIndex++;
      if (slideIndex >= slides.length) { slideIndex = 0, previosIndex = slides.length - 1 }
      slides[previosIndex].className = slides[previosIndex].className.replace(" isActive", " notActive");
      dots[previosIndex].className = dots[previosIndex].className.replace(" active", "");
      slides[slideIndex].className = slides[slideIndex].className.replace(" notActive", " isActive");
      dots[slideIndex].className += " active";

    }, 2000);

  }

  


  ngOnInit() {
      document.title= "Harmony - Home"
  }

}