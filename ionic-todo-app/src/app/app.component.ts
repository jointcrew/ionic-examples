import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'タスク一覧',
      url: '/tasks',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  /**
   * Ionicのライフサイクルメソッド
   * Angularの提供するNgOnInit等はコンポーネントの生成が
   * トリガーとなっているのに対して
   * Ionicは表示がトリガーとなっている
   */

  /**
   * ページが表示されるアニメーションが始まったとき
   */
  ionViewWillEnter() {}

  /**
   * ページが表示されるアニメーションが終了したとき
   */
  ionViewDidEnter() {}

  /**
   * ページが離脱・遷移するアニメーションが始まるとき
   */
  ionViewWillLeave() {}

  /**
   * ページが離脱するアニメーションが終了したとき
   */
  ionViewDidLeave() {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
