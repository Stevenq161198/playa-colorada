import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { Page404Component } from "./components/page404/page404.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ToursComponent } from "./components/tours/tours.component";
import { TransportsComponent } from "./components/transports/transports.component";

import { ContentfulService } from "./services/contentful.service";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Page404Component,
    AboutUsComponent,
    ToursComponent,
    TransportsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSkeletonLoaderModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
