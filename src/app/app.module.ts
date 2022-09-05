import { NgModule } from "@angular/core";
import { BrowserModule, Meta } from "@angular/platform-browser";

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
import { ContactComponent } from "./components/contact/contact.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import {
  NgbPaginationModule,
  NgbAlertModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Page404Component,
    AboutUsComponent,
    ToursComponent,
    TransportsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    NgbPaginationModule,
    NgbAlertModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ContentfulService, Meta, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
