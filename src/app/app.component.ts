import {Component, OnInit} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {TranslateService} from 'ng2-translate';

// import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home'


@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    rootPage: any;

    constructor(platform: Platform, public translate: TranslateService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    ngOnInit(): void {
        this.rootPage = HomePage;
        this.translate.use('zh_cn');

        console.log(this.translate.getBrowserLang());
        console.log(this.translate.getBrowserCultureLang());
        console.log(navigator.language);
    }
}
