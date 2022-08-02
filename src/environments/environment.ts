// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  contentful: {
    spaceId: "r9p9wi2nb3dd",
    token: "Ntky-BHpCO4HzoTDh1ZY2riTyCNL3h-XFiJKvrDHhAs",
    contentTypeIds: {
      //The property name angularPost can be whatever
      //what matters in the value which is the content type Id.
      sections: "sections",
      products: "products",
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
