import { Injectable } from '@angular/core'


export class WinterItems {
    isActive: boolean
    imgUrl: string
    pictureNum: string
    description: string
}


@Injectable()
export class WinterService {

    // winterItems
    // constructor() {
    //     this.winterItems = [];

    //     this.winterItems[0] = new WinterItems();
    //     this.winterItems[0].isActive = false
    //     this.winterItems[0].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.5&disp=emb&realattid=ii_15e5150d8824b8e1&attbid=ANGjdJ_oCTbInOEQgv3Y0q2h-bABQUEWRlkRxkhdWKopEJPePfNHklPH86-YzZ3o95j55Zrw_8wgp-u1l1pu9lg5BBAFsaEQ-NwtXTMX9yOWudNnEREPVVdSWkvYf-g&sz=w580-h740&ats=1504609881579&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[0].pictureNum = 1;
    //     this.winterItems[0].description

    //     this.winterItems[1] = new WinterItems();
    //     this.winterItems[1].isActive = false;
    //     this.winterItems[1].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.4&disp=emb&realattid=ii_15e5150e0a0baf85&attbid=ANGjdJ8hQpcG0X95avLtFwz8z3_5EWXPVsTGCUnZS1r7EzM7sST3nlMS9s0iN8rUbYl9kCtSRIWsj1rDSM7vS2VkEme4fqm2eYmvEmDPd3cgjuIJCcPDvZqAhMC3Z-E&sz=w580-h740&ats=1504609881580&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[1].pictureNum = 2;
    //     this.winterItems[1].description

    //     this.winterItems[2] = new WinterItems();
    //     this.winterItems[2].isActive = false;
    //     this.winterItems[2].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.16&disp=emb&realattid=ii_15e5150e9bb26380&attbid=ANGjdJ-eJSrg4KLSgtc5SMhg5ftTv7eLBT-03a1AJo0ZaGHqvme70I8Tl3VP0KrfJXlEWeO_wOs398W6BqR-ZbHxvyHnpfZ56A9fpbzxeUoK6W8GzvWq2zIqqJBp8qU&sz=w580-h740&ats=1504609881580&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[2].pictureNum = 3;
    //     this.winterItems[2].description

    //     this.winterItems[3] = new WinterItems();
    //     this.winterItems[3].isActive = false;
    //     this.winterItems[3].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.2&disp=emb&realattid=ii_15e5150e4e9d3407&attbid=ANGjdJ_jpw9YCDfLz1elXcaYDQfAXXRltj0_JU78g7S0ZYnxcuMXpNsho3gZHgCSNRQpEBV5peqSJXm7H9G935nek3U32ek-r04afDpXLs7926G1NEyvBnL9WMDHHGA&sz=w580-h740&ats=1504609881580&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[3].pictureNum = 4;
    //     this.winterItems[3].description

    //     this.winterItems[4] = new WinterItems();
    //     this.winterItems[4].isActive = false;
    //     this.winterItems[4].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.1&disp=emb&realattid=ii_15e5150e6490f441&attbid=ANGjdJ_Yuz7zPErCTagWUUG_wcbeXyGHhHApGl3JoZfRVEGPzHZmHbN_A6Wj8hW-bz3jLXXW2q62u_iTCBp_KYytleCQgHMt0Tc2EJonmR2BOXngn-m-xl7P2gM22Us&sz=w580-h740&ats=1504609881581&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[4].pictureNum = 5;
    //     this.winterItems[4].description

    //     this.winterItems[5] = new WinterItems();
    //     this.winterItems[5].isActive = false;
    //     this.winterItems[5].imgUrl = 'https://mail.google.com/mail/u/1/?ui=2&ik=4072f9b67b&view=fimg&th=15e515492797574f&attid=0.10&disp=emb&realattid=ii_15e5150e28cc3b1f&attbid=ANGjdJ_bCwnptJYmleGeQdeJBnq2azGW_vps49LHr5trYnJHXUIV2LqQVBine-t2shDp22Znu1zyijWFpdZcvbClHuB4wfqMZWYJZoRJczuJUELbCAW6H_e-lkXgip4&sz=w580-h740&ats=1504609881580&rm=15e515492797574f&zw&atsh=1'
    //     this.winterItems[5].pictureNum = 6;
    //     this.winterItems[5].description
    // }



}


