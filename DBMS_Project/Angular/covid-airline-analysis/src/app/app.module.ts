import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { UsMapModule } from 'angular-us-map';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    UsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
