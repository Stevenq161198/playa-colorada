import { Injectable, NgModuleFactory } from "@angular/core";
import * as contentful from "contentful";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {}

  // console logs a response for debugging
  logContent(contentId: string) {
    //this.client.getEntry(contentId).then((entry) => console.log(entry));
    //this.client.getLocales();
  }

  // return all products
  getProducts(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentful.contentTypeIds.products,
          },
          query
        )
      )
      .then((res) => res.items);
  }
  // return one product
  getProduct(id: string, lang: string): any {
    const app = this.client.getEntry(id, { locale: lang });
    //console.log(app);

    return this.client
      .getEntry(id, { locale: lang })
      .then((entry) => entry.fields);
  }

  // return all products
  getTransportations(query?: object): Promise<contentful.Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentful.contentTypeIds.sections,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  // return all products
  getHomeInfo(id: string): any {
    return this.client.getEntry(id).then((entry) => entry.fields);
  }
}
