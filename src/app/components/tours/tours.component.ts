import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ContentfulService } from "src/app/services/contentful.service";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.component.html",
  styleUrls: ["./tours.component.scss"],
})
export class ToursComponent implements OnInit {
  private routeSub: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private router: Router
  ) {}

  tourId!: string;
  isDataTour: boolean = false;
  tour: any = {};
  lang!: string;

  ngOnInit() {
    // clean variables
    this.tour = {};
    this.tourId = "";
    this.isDataTour = false;

    this.routeSub = this.route.params.subscribe((params) => {
      this.tourId = params["id"];
      // console.log(this.tourId); //log the value of id

      //this.contentfulService.logContent("7cMTrKgW9T3gIFayvajDc");
    });
    this.lang = localStorage.getItem("lang") || "en-US";
    this.getData();
  }

  async getData() {
    this.tour = await this.contentfulService.getProduct(this.tourId, this.lang);
    this.isDataLoaded(this.tour);
    //console.log("tour: ", this.tour);
  }

  isDataLoaded(data: any) {
    if (data != undefined && data != null) {
      this.isDataTour = true;
    } else {
      this.isDataTour = false;
    }
  }

  navigate() {
    this.router.navigate(["/contact"]);
  }
}
