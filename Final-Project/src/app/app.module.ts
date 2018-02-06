import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WomanComponent } from './woman/woman.component';
import { WinterComponent } from './winter/winter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms';
import { SaleComponent } from './sale/sale.component';
import { OrdersComponent } from './orders/orders.component';
import { LikeComponent } from './like/like.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component'
import { Http, RequestOptions } from '@angular/http'; 
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { MenComponent } from './men/men.component';
import { LoginService } from './login/login.service';
import { AuthService } from './auth.service';
import { SaleService } from './sale/sale.service';
import {CheckedGlobal} from './checkedGlobal.service';
import { AuthGuardService as AuthGuard} from './auth-guard.service';
import { StorageService } from './storage/storage.service';
import { PipePipe } from './pipe.pipe';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
return new AuthHttp(new AuthConfig({
tokenGetter: (() => localStorage.getItem('access_token')),
globalHeaders: [{ 'Content-Type': 'application/json' }],
}), http, options);
}


const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'winter', component: WinterComponent, canActivate : [AuthGuard]},
{ path: 'contact-us', component: ContactUsComponent},
{ path: 'admin', component: AdminComponent,  canActivate : [AuthGuard] },
{ path: 'about', component: AboutComponent },
{ path: 'sale', component: SaleComponent, canActivate : [AuthGuard] },
{ path: 'orders', component: OrdersComponent, canActivate : [AuthGuard] },
{ path: 'woman', component: WomanComponent, canActivate : [AuthGuard] },
{ path: 'men', component:MenComponent, canActivate : [AuthGuard] }
];

@NgModule({
    imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WomanComponent,
    WinterComponent,
    ContactUsComponent,
    SaleComponent,
    OrdersComponent,
    LikeComponent,
    AboutComponent,
    AdminComponent,
    MenComponent,
    PipePipe
    
  ],

  providers: [LoginService, AuthService,SaleService,CheckedGlobal,AuthGuard,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
