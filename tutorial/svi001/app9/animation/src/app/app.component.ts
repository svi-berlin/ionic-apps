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
    smartAudio: SmartAudio

    ) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash = false);
      smartAudio.preload('applause', 'assets/audio/applause.mp3');
      smartAudio.preload('applause-short', 'assets/audio/applause-short.mp3');
    });
  }

}

