import {NgModule, ErrorHandler} from '@angular/core';
import {Http} from "@angular/http";
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate'

import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SettingPage} from "../pages/setting/setting";
import {SettingLanguagePage} from "../pages/setting-language/setting-language";
import {SettingDataPage} from "../pages/setting-data/setting-data";
import {SettingNetworkPage} from "../pages/setting-network/setting-network";
import {MapPage} from "../pages/map/map";
import {Capitalize} from "../pipes/capitalize";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    SettingLanguagePage,
    SettingDataPage,
    SettingNetworkPage,
    MapPage,
    Capitalize
  ],
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    SettingLanguagePage,
    SettingDataPage,
    SettingNetworkPage,
    MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
