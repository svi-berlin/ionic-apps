import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


import { SmartAudio } from '../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  rootPage:any = HomePage;

  constructor(

    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    smartAudio: SmartAudio

    ) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      smartAudio.preload('applause', 'assets/audio/applause.mp3');
    });
  }

}

