import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninPageModule } from './signin/signin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupPageModule } from './signup/signup.module';
import { HomePageModule } from './home/home.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { AuthService, AuthGuard, AuthInterceptor } from './services/auth.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
   HttpClientModule,
   SigninPageModule,
   SignupPageModule,
   HomePageModule,
   ReactiveFormsModule,
   FormsModule,
   ],
 providers: [
   ApiService,
   AuthService,
   AuthGuard,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true,
   },
   StatusBar,
   SplashScreen,
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
 ],
  bootstrap: [AppComponent]
})
export class AppModule {}
