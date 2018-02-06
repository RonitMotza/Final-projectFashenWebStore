import { Component, OnInit, Input } from '@angular/core';

import { WinterService } from './winter.service';
@Component({
  selector: 'winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.css'],
  providers: [WinterService]
})
export class WinterComponent implements OnInit {
  slideIndex = 0;
  previousIndex = 0;
  constructor(public winterService: WinterService) {
    //  var slides = document.getElementsByClassName("mySlides");
    //  var dots = document.getElementsByClassName("dot");
  }

  ngOnInit() {
      document.title= "Harmony - Winter"
    setInterval(() => {
      //  debugger;
   /*   this.previousIndex = this.slideIndex;
      this.slideIndex++;
      if (this.slideIndex >= this.winterService.winterItems.length - 1) {
        this.slideIndex = 0,
          this.previousIndex = this.winterService.winterItems.length - 1
      }
        
      this.winterService.winterItems[this.previousIndex].isActive = false;
      this.winterService.winterItems[this.slideIndex].isActive = true;*/
      // slides[previousIndex].className = slides[previousIndex].className.replace(" isActive", " notActive");
      // dots[previousIndex].className = dots[previousIndex].className.replace(" active", "");
      // slides[slideIndex].className = slides[slideIndex].className.replace(" notActive", " isActive");
      // dots[slideIndex].className += "active";
    }, 1500);
  }

}
