import { Component } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";
import { CanonicalService } from "./services/canonical.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private metaTagService: Meta,
    private canonical: CanonicalService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang("en-US");
    this.translateService.use(localStorage.getItem("lang") || "en_US");
  }

  ngOnInit() {
    // create a canonical url
    this.canonical.createCanonicalLink();
    // adding meta tags to facilitate de SEO
    this.metaTagService.addTags([
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-02-10", scheme: "YYYY-MM-DD" },
      { name: "keywords", content: "Playa Colorada WebPage info" },
      { name: "author", content: "D 5" },
      { name: "robots", content: "index, follow" },
    ]);
  }
  onActivate(event: any) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
