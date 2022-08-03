import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    private contentfulService: ContentfulService
  ) {}

  tourId!: string;
  isDataTour: boolean = false;
  tour: any = {};

  async ngOnInit(): Promise<void> {
    this.routeSub = this.route.params.subscribe((params) => {
      this.tourId = params["id"];
      // console.log(this.tourId); //log the value of id
    });

    this.tour = await this.contentfulService.getProduct(this.tourId);
    this.isDataLoaded(this.tour);
    console.log("tour: ", this.tour);
  }
  isDataLoaded(data: any) {
    if (data != undefined && data != null) {
      this.isDataTour = false;
    } else {
      this.isDataTour = false;
    }
  }
}
