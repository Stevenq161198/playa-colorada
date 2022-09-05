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

    // this.getData();
  }

  navigate() {
    this.router.navigate(["/contact"]);
  }
}
