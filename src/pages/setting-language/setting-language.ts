import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'page-setting-language',
    templateUrl: 'setting-language.html'
})
export class SettingLanguagePage implements OnInit {
    languages: Array< {text: string, value: string}> = [
        {text: 'English', value: 'en'},
        {text: '简体中文', value: 'zh_cn'},
        {text: '繁體中文', value: 'zh_tw'}
    ];

    currentLanguage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public translate: TranslateService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingLanguagePage');
    }

    ngOnInit(): void {
        this.currentLanguage = this.translate.currentLang;
    }

    changeLanguage(lang: string) {
        if (this.currentLanguage !== lang) {
            this.currentLanguage = lang;
            this.translate.use(lang);
        }
    }
}
