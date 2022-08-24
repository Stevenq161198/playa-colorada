import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContentfulService } from "src/app/services/contentful.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  isData: boolean = false;
  data: any = {};
  lang!: string;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = {};
    this.isData = false;

    this.lang = localStorage.getItem("lang") || "en-US";
    this.getData();
  }

  async getData() {
    this.data = await this.contentfulService.getAboutInfo(
      "2XkXqVBFLOGvha1350k2py",
      this.lang
    );
    this.isDataLoaded(this.data);
    //console.log("data: ", this.data);
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
