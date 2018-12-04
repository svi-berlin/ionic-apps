import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SmartAudio } from '../providers/smart-audio/smart-audio';


import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  rootPage:any = TabsPage;

  showSplash = true;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,

    smartAudio: SmartAudio) {

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();

        timer(3000).subscribe(()=>this.showSplash = false);

        smartAudio.preload('001-ne-kaun-la', 'assets/audio/001-ne-kaun-la.mp3');
        smartAudio.preload('002-nameh', 'assets/audio/002-nameh.mp3');
        smartAudio.preload('003-tweyada', 'assets/audio/003-tweyada.mp3');
        smartAudio.preload('004-pudehnaw', 'assets/audio/004-pudehnaw.mp3');
        smartAudio.preload('005-mapubabu', 'assets/audio/005-mapubabu.mp3');
        smartAudio.preload('006-edehnaw', 'assets/audio/006-edehnaw.mp3');
        smartAudio.preload('006-kaundehnaw', 'assets/audio/006-kaundehnaw.mp3');
        smartAudio.preload('006-yadehnaw', 'assets/audio/006-yadehnaw.mp3');
        smartAudio.preload('007-pudehnaw', 'assets/audio/007-pudehnaw.mp3');
        smartAudio.preload('008-edehnaw', 'assets/audio/008-edehnaw.mp3');
        smartAudio.preload('009-kaundehnaw', 'assets/audio/009-kaundehnaw.mp3');
        smartAudio.preload('010-yadehnaw', 'assets/audio/010-yadehnaw.mp3');
        smartAudio.preload('011-bazaga', 'assets/audio/011-bazaga.mp3');
      });
    }
}

