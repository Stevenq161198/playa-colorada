import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ContentfulService } from "src/app/services/contentful.service";

@Component({
  selector: "app-transports",
  templateUrl: "./transports.component.html",
  styleUrls: ["./transports.component.scss"],
})
export class TransportsComponent implements OnInit {
  private routeSub: Subscription | undefined;

  isDataRoutes: boolean = false;
  routes: any = {};

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    // clean variables
    this.routes = {};
    this.isDataRoutes = false;

    this.getRoutesData();
  }

  async getRoutesData() {
    this.routes = await this.contentfulService.getTransportations();
    this.isDataLoaded(this.routes);
    //console.log("routes: ", this.routes);
  }

  isDataLoaded(data: any) {
    if (data != undefined && data != null) {
      this.isDataRoutes = true;
    } else {
      this.isDataRoutes = false;
    }
  }
}
