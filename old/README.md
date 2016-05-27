# lb-ngIonic

[![Dependency Status](https://david-dm.org/loicknuchel/ionic-starter.svg)](https://david-dm.org/loicknuchel/ionic-starter)
[![devDependency Status](https://david-dm.org/loicknuchel/ionic-starter/dev-status.svg)](https://david-dm.org/loicknuchel/ionic-starter#info=devDependencies)

Kickstart Your Ionic Project with Nodejs LoopBack backend in seconds !

This project aims to let you start a new Hybrid cross platform app as fast as possible using Loopback-angular-admin backend.

This is a continuation of the [ionic starter](https://github.com/loicknuchel/ionic-starter) and

Just clone it and you are ready to do ! Many boilerplate code is already written and most usefull libs are included. I'm trying to follow best practices with Angular & Ionic so it could be a good kick start :)

Feel free to open an issue for any question or suggestion you could have.

This application (mostly) follows the [John Papa's style guide](https://github.com/johnpapa/angular-styleguide).

## Getting started

- Install nodejs, npm, gulp, bower, cordova, ionic & sass (if not already done)
- `git clone git@github.com:denzelwamburu/lb-ngIonic.git` : clone this repo
- `cd lb-ngIonic` : go to folder
- `bower install` : install app dependencies
- `npm install` : install build dependencies
- `ionic setup sass` : use sass
- `ionic serve` : start the app on your browser

For the impatients, you can run all these commands in one time : `git clone git@github.com:denzelwamburu/lb-ngIonic.git && cd lb-ngIonic && bower install && npm install && ionic setup sass && ionic serve`

To run the app on your android device :

- `ionic platform add android` : add android platform to the project
- `ionic resources` : generate icon & splash-screen for project platforms
- `ionic run android` : run your app !

Once again, in one command : `ionic platform add android && ionic resources && ionic run android`

Before starting, makes sure you've followed [Getting Started with LoopBack](http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack) to install Node and LoopBack.
In adittion, you will need a basic understanding of:
 - [AngularJs](https://angularjs.org/)
 - Ionic [CSS](http://ionicframework.com/docs/components/) and [Javascript](http://ionicframework.com/docs/api/) components  

## Main features

- User authentication
- Storage helpers & caching
- REST & Parse Api helpers
- Error handling & async remote logger
- Angular wrappers & browser mocks for plugins :
    - [org.apache.cordova.device](https://github.com/apache/cordova-plugin-device) ([ngCordova](http://ngcordova.com/docs/plugins/device/))
    - [org.apache.cordova.dialogs](https://github.com/apache/cordova-plugin-dialogs) ([ngCordova](http://ngcordova.com/docs/plugins/dialogs/))
    - [https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin) ([ngCordova](http://ngcordova.com/docs/plugins/toast/))
    - [org.apache.cordova.inappbrowser](https://github.com/apache/cordova-plugin-inappbrowser) ([ngCordova](http://ngcordova.com/docs/plugins/inAppBrowser/))
    - [org.apache.cordova.geolocation](https://github.com/apache/cordova-plugin-geolocation)
    - [org.apache.cordova.camera](https://github.com/apache/cordova-plugin-camera)
    - [https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
    - [org.apache.cordova.media](https://github.com/apache/cordova-plugin-media)
    - [https://github.com/loicknuchel/cordova-device-accounts](https://github.com/loicknuchel/cordova-device-accounts)

## Server
This is an Ionic Mobile client for [loopback-angular-admin](https://github.com/beeman/loopback-angular-admin) using loopback as a backend.

Set up the server or clone the [repo](https://github.com/beeman/loopback-angular-admin).

## Personnalize

As it's only a template project, you may want to change its name. For that, you just have to open :

- `config.xml` (widget id, name, description & author)
- `www/index.html` (title)
- `bower.json` (name, homepage, author & description)
- `package.json` (name & description)
- `ionic.project` (name)
-  `lib/lb-services` (Api-Url, generated lb-service based on your backend)

## Used versions

- Node v4.2.1 (`node -v`)
- Cordova 5.3.3 (`cordova -version`)
- Bower 1.6.3 (`bower -v`)
- Angular 1.3.13 (see bower.json)
- Ionic 1.0.0-rc.5 (see bower.json)

## TODO

- Mettre en place des analytices (segment.io, google analytics...)
- tell Ionic CLI to not add empty cordova.js :(
- improve log.js : get device uuid instead of userId...
- Geolocation plugin : check if geolocation is enabled
- add tests & comments (plugins services & mocks, utils services...) (http://forum.ionicframework.com/t/unit-tests-for-ionic/3711/5)
- add standard usefull plugins :
    - http://mcgivery.com/using-custom-url-schemes-ionic-framework-app/
    - sqlite db (https://blog.nraboy.com/2015/01/deploy-ionic-framework-app-pre-filled-sqlite-db/)
    - org.apache.cordova.statusbar ([ngCordova](http://ngcordova.com/docs/plugins/statusbar/))
    - de.appplant.cordova.plugin.local-notification ([ngCordova](http://ngcordova.com/docs/plugins/localNotification/))
    - webintent
    - org.apache.cordova.splashscreen ([ngCordova](http://ngcordova.com/docs/plugins/splashscreen/))
    - https://github.com/pushandplay/cordova-plugin-apprate ([ngCordova](http://ngcordova.com/docs/plugins/appRate/))
    - https://github.com/whiteoctober/cordova-plugin-app-version ([ngCordova](http://ngcordova.com/docs/plugins/appVersion/))

## Infos

### Browser development

- Chrome cordova : https://chrome.google.com/webstore/detail/cordova-mocks/iigcccneenmnplhhfhaeahiofeeeifpn (https://github.com/pbernasconi/chrome-cordova)

### Android debug

- android remote debug : https://developer.chrome.com/devtools/docs/remote-debugging
- activate developer mode on android

### Specific urls

Use these custom urls to open other apps using inappbrowser (org.apache.cordova.inappbrowser)

- "tel:0123456789" => call this number
- "sms:0123456789?body=coucou" => send sms to this number
- "geo:lat,lon" => open google map to this geoloc
- "mailto:toto@example.com" => send an email
- "market:???"

see http://stackoverflow.com/questions/26271313/tel-sms-and-mailto-no-longer-working-in-android-after-upgrading-to-cordo

### Other links

- Push
    - https://github.com/hollyschinsky/PushNotificationSample
- Unit test
    - https://bradb.net/unit-testing-with-the-ionic-framework/
    - http://forum.ionicframework.com/t/ionic-and-karma-unittest/8799
- Data
    - PouchDB (http://devgirl.org/2014/12/30/sync-data-using-pouchdb-in-your-ionic-framework-app/)

## Contributing
- Feel Free to Open an issue and ask any questions. You can email me denzjoseph@gmail.com
- Be awesome and make a pull request.
- Be Super awesome to Star This project.
- Checkout The [CONTRIBUTING](https://github.com/denzelwamburu/lb-ngIonic/blob/master/CONTRIBUTING.md) Documentation.
## Credits

- [Ionic Starter](https://github.com/loicknuchel/ionic-starter) by [loicknuchel](https://github.com/loicknuchel).
- [loopback-angular-admin](https://github.com/beeman/loopback-angular-admin)
- [loopback-example-ionic](https://github.com/belibasakis/loopback-example-ionic)
