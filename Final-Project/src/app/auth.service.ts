import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Http } from '@angular/http';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '7T1lhEHd8CUo5Rxqlmcxn42kD0WLcVq4',
    domain: 'authon.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:54842/api',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid userinfo email read:messages'
  });


  constructor(public router: Router, private http: Http, private loginservice: LoginService) {

  }

  userProfile: any;
  profile: any;
  arCustomers: any[];
  IdCust: any;
  // email: string;

  Role = false;
  public login(): void {
    this.auth0.authorize();
  }
  //   }

  // arr:any[]=[];
  //   ClickedChecked(a:any)
  //   {
  //     console.log(a+"a");
  //   this.arr.push(a);
  //      console.log(this.arr);
  //     localStorage.setItem('clicked',JSON.stringify(a));
  //     console.log("new add");
  //     console.log(localStorage.getItem('clicked'));

  //     return localStorage.getItem('clicked');
  //   }



  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['login']);
        console.log(err);
      }

    });
  }

  public setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.getProfile((err, profile) => {
      this.profile = profile;
      console.log(this.profile);
      const user = {
        Email: this.userProfile.email
      };
      console.log("userProfile", this.userProfile.email);
      const req = this.loginservice.Post(user);
      req.subscribe(rsp => {
        if (rsp.status == 201) {
          console.log("success : " + rsp);
          console.log(user);
        
        //  window.alert("201");
          this.IdCust = rsp.json();
          console.log(this.IdCust);


        }
        else if (rsp.status == 200) {
          console.log("success : " + rsp);
          console.log(user);
          this.IdCust = rsp.json();
          localStorage.setItem('IdCust', this.IdCust);

        }
        else { console.log("server responded error : " + rsp); }
      },
        (err) => {
          console.log("error : " + err);
        }
      );

    })
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');
    this.Role=false;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {

    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        console.log(self.userProfile)
        localStorage.setItem("email", self.userProfile.email);
      }
      cb(err, profile);
    });
  }

  GetRole() {
    this.http.get("https://authon.auth0.com/userinfo").subscribe((res) => {
      console.log(res)
    })
  }

  function(user, context, callback) {
    user.app_metadata = user.app_metadata || {};
    // You can add a Role based on what you want
    // In this case I check domain
    var addRolesToUser = function (user, cb) {
      if (user.email && user.email.indexOf('yehuditsahalo@gmail.com') > -1) {
        cb(null, ['admin']);

      } else {
        cb(null, ['user']);
      }
    };

    addRolesToUser(user, function (err, roles) {
      if (err) {
        callback(err);
      } else {
        user.app_metadata.roles = roles;
        auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
          .then(function () {
            // context.idToken['https://example.com/roles'] = user.app_metadata.roles;
            callback(null, user, context);
          })
          .catch(function (err) {
            callback(err);
          });
      }
    });
  }

  public GetIdCust() {
    window.alert("dd1 " + this.IdCust);
    return this.IdCust;
  }

  public isAdmin() {
    //debugger;
    setTimeout(() => {
      console.log(localStorage.getItem("email"));
      this.Role = localStorage.getItem("email") == "yehuditsahalo@gmail.com";
      console.log("EMAIL", this.Role);
    }, 900);
    //this.Role = this.email == "yehuditsahalo@gmail.com";

  }
}