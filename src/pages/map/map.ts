import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from "@angular/core";
import {NavController, NavParams, Platform} from "ionic-angular";
import {Geolocation} from "ionic-native";
import {Subscription} from "rxjs";

declare var google;
/*
 Generated class for the Map page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage implements OnInit,OnDestroy {
  @ViewChild("map") mapElement: ElementRef;

  map: any;
  coordinates: any;
  geoSubscribe: Subscription;

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(() => {
      Geolocation.getCurrentPosition().then(data => {
        // this.coordinates = data.coords;
      }).catch(error => {
        console.log(error);
      });

      this.geoSubscribe = Geolocation.watchPosition()
        .subscribe(data => {
          this.coordinates = data.coords;
        });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.initMap();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.geoSubscribe)
      this.geoSubscribe.unsubscribe();
  }

  initMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
