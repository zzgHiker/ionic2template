import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';

import {SettingLanguagePage} from "../setting-language/setting-language";
import {SettingDataPage} from "../setting-data/setting-data";
import {SettingNetworkPage} from "../setting-network/setting-network";
import {MapPage} from "../map/map";
import {TouchID} from "ionic-native";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage implements OnInit {
  user: {name: string, title: string} = {name: "张三", title: "业务员"};
  cacheDate: any;
  appVersion: string;

  touchIDAvailable: boolean;

  confirmTitle: string;
  confirmMessage: string;
  confirmCancel: string;
  confirmOK: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.cacheDate = Date.now();
    this.appVersion = "1.0 (beta)";
    this.translate.get("Logout.Confirm")
      .subscribe(data => this.confirmTitle = data);
    this.translate.get("Logout.ConfirmMessage")
      .subscribe(data => this.confirmMessage = data);
    this.translate.get("Logout.ConfirmCancel")
      .subscribe(data => this.confirmCancel = data);
    this.translate.get("Logout.ConfirmOK")
      .subscribe(data => this.confirmOK = data);

    TouchID.isAvailable()
      .then(res => this.touchIDAvailable = true, err => this.touchIDAvailable = false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  navTo(page: string) {
    switch (page) {
      case "language":
        this.navCtrl.push(SettingLanguagePage, {});
        break;
      case "network":
        this.navCtrl.push(SettingNetworkPage, {});
        break;
      case "data":
        this.navCtrl.push(SettingDataPage, {});
        break;
      case "map":
        this.navCtrl.push(MapPage, {});
        break;
    }
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: this.confirmTitle,
      message: this.confirmMessage,
      buttons: [
        {
          text: this.confirmCancel,
          role: "cancel",
          handler: () => {
            console.log("Cancel");
          }
        },
        {
          text: this.confirmOK,
          handler: () => {
            console.log("OK");
          }
        }
      ]
    });

    confirm.present();
  }


}
