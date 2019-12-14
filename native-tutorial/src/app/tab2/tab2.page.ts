import { Component } from '@angular/core';
import { AdOptions, AdPosition, AdSize } from '@rdlabo/capacitor-admob';
import { Plugins } from '@capacitor/core';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isAdSense = false;
  constructor(public badge: Badge) {}

  updateBadge() {
    this.badge.increase(1);
  }

  clearBadge() {
    this.badge.clear();
  }

  displayAdMob() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: AdSize.BANNER,
      position: AdPosition.BOTTOM_CENTER,
      margin: '60'
    };
    Plugins.AdMob.showBanner(options).then(
      success => (this.isAdSense = true),
      error => (this.isAdSense = false)
    );
  }

  hideAdMob() {
    Plugins.AdMob.hideBanner().then(success => (this.isAdSense = false));
  }
}
