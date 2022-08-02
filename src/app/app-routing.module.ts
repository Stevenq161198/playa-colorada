import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HomeComponent } from "./components/home/home.component";
import { Page404Component } from "./components/page404/page404.component";
import { ToursComponent } from "./components/tours/tours.component";
import { TransportsComponent } from "./components/transports/transports.component";

import { ContentfulService } from "./services/contentful.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent },
  { path: "tours", component: ToursComponent },
  { path: "transportation", component: TransportsComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ContentfulService],
})
export class AppRoutingModule {}
