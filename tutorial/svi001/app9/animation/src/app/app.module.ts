import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { L1Page } from '../pages/l1/l1';
import { L2Page } from '../pages/l2/l2';
import { L3Page } from '../pages/l3/l3';
import { L4Page } from '../pages/l4/l4';
import { L5Page } from '../pages/l5/l5';
import { L6Page } from '../pages/l6/l6';
import { L7Page } from '../pages/l7/l7';
import { L8Page } from '../pages/l8/l8';
import { L9Page } from '../pages/l9/l9';
import { L10Page } from '../pages/l10/l10';
import { Level1finishedPage } from '../pages/level1finished/level1finished';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { QuotesService } from '../services/quotes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    L1Page,
    L2Page,
    L3Page,
    L4Page,
    L5Page,
    L6Page,
    L7Page,
    L8Page,
    L9Page,
    L10Page,
    Level1finishedPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    L1Page,
    L2Page,
    L3Page,
    L4Page,
    L5Page,
    L6Page,
    L7Page,
    L8Page,
    L9Page,
    L10Page,
    Level1finishedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SmartAudio,
    NativeAudio,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
