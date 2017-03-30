import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate";
import {NavController} from "ionic-angular";
import {SettingPage} from "../setting/setting";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public translate: TranslateService) {
    }

    changeLang(lang: string) {
        this.translate.use(lang);
    }

    navTo(page: string) {
        if (page == "setting")
            this.navCtrl.push(SettingPage, {});
    }

}
