// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyC9iCKFtL7LUYdgR8e876Mh7etNg4uNcF0',
    authDomain: 'bytheway-80062.firebaseapp.com',
    databaseURL: 'https://bytheway-80062.firebaseio.com',
    projectId: 'bytheway-80062',
    storageBucket: 'bytheway-80062.appspot.com',
    messagingSenderId: '96858170126'
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoibWFyeXNpZWsiLCJhIjoiY2pxamlkbzl5MG9tNTQ5bnk5NWs4OHM4dCJ9.4j9eJ1PTWdnbvdaziFbHOQ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
