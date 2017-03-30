import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the SettingData page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-setting-data',
    templateUrl: 'setting-data.html'
})
export class SettingDataPage implements OnInit {
    syncTime: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingDataPage');
    }

    ngOnInit(): void {
        this.syncTime = Date.now()
    }
}
