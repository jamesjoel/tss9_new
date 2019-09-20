import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authInterceptor';
// import { LayoutComponent } from './home/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent
    // LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // HomeModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
