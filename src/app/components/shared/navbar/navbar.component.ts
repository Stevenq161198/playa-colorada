import { Component, HostListener, OnInit } from "@angular/core";
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

  lang: any;

  isMobileLayout = false;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    window.onresize = () => (this.isMobileLayout = window.innerWidth <= 991);

    this.contentfulService
      .getProducts()
      .then((products) => (this.products = products));

    //this.contentfulService.logContent("7cMTrKgW9T3gIFayvajDc");
  }
  navigate(id: any) {
    this.router.navigate([`tour/id`]);
    //[routerLink]="['/tour', product.sys.id]"
  }
  changeLang(lang: any) {
    localStorage.removeItem("lang");
    console.log(lang);
    localStorage.setItem("lang", lang);
    window.location.reload();
  }
}
