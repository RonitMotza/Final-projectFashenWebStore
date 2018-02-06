import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   router:any;
    message: string;
    FormOrderShow = true;
    address: string;
    phone: string;
    subject: string;
    name: string;
    emailCust: any;
    booldj = false;
    loaderShow = false;
    to = "ronit93motza@gmail.com";
mess1 = "";
mess2 = "";
 successMessage1 = "";
  successMessage2 = "";

    clickHandlerGet(arry: any) {
        const body = {
            Body: "Customer Email:    " + this.emailCust + "    Customer Name :   " + this.name + "    Message :   " + this.message,
            To: this.to,
            Subject: this.subject,
            From: this.emailCust,
            EmailCust: this.emailCust,
            Name: this.name
        };
        const req = this.http.post("http://localhost:54842/api/ContactUs", body)
        this.loaderShow = true;
        this.FormOrderShow= false;
        


        req.subscribe(rsp => {

            if (rsp.status == 200) {
             this.booldj =true;
             this.loaderShow = false;
                console.log("success : " + rsp);
                this.mess1= "Thank You,    " + this.name + "       "  +  "For Contacting Us.";
               this.mess2 = "Your Message Was Sent. We'll Replay As Soon As Possible."; 
                this.successMessage1 = "H • A • R • M • O • N • Y,";
                this.successMessage2 = "By Yehudit & Ronit";
                 this.FormOrderShow = false;
                //window.alert(" Thank You For Contacting Us, Your Message Was Sent. We'll Replay As Soon As Possible.");
                this.to = "";
                this.subject = "";
                this.emailCust = "";
                this.address = ""
                this.name = "";
                this.message = "";
                this.phone = "";
            }

            else { console.log("server responded error : " + rsp); }

        },
            (err) => {
                console.log("error : " + err);
            }
        );
    }

    constructor(private http: Http, private route: ActivatedRoute, private  _router: Router) {
  this.router = _router;

    }

    ngOnInit() {
          document.title= "Harmony - Contact-Us"
    }
          hideErrorMsg()
    {
       this.router.navigate(['/home' ]);
    }

}
