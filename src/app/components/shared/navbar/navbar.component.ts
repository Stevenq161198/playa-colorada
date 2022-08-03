import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Entry } from "contentful";
import { ContentfulService } from "src/app/services/contentful.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public products: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.contentfulService
      .getProducts()
      .then((products) => (this.products = products));

    //this.contentfulService.logContent("7cMTrKgW9T3gIFayvajDc");
  }
  navigate(id: any) {
    this.router.navigate([`tour/id`]);
    //[routerLink]="['/tour', product.sys.id]"
  }
}
