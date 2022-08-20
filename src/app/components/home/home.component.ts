import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContentfulService } from "src/app/services/contentful.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isData: boolean = false;
  data: any = {};
  imageURL: string = "";

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = {};
    this.isData = false;

    this.getData();
  }

  async getData() {
    this.data = await this.contentfulService.getHomeInfo(
      "1dzCS1bzH5OS1gDNdo09X1"
    );
    this.isDataLoaded(this.data);
    console.log("data: ", this.data);
  }

  isDataLoaded(data: any) {
    if (data != undefined && data != null) {
      this.isData = true;
    } else {
      this.isData = false;
    }
  }
  navigate() {
    this.router.navigate(["/contact"]);
  }
}
