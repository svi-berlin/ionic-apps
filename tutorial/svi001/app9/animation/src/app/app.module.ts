import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { TrainerPage } from '../pages/trainer/trainer';
import { InfoPage } from '../pages/info/info';
import { Cards1Page } from '../pages/cards1/cards1';
import { Cards2Page } from '../pages/cards2/cards2';
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
import { L11Page } from '../pages/l11/l11';
import { L12Page } from '../pages/l12/l12';
import { L13Page } from '../pages/l13/l13';
import { L14Page } from '../pages/l14/l14';
import { L15Page } from '../pages/l15/l15';
import { L16Page } from '../pages/l16/l16';
import { L17Page } from '../pages/l17/l17';
import { L18Page } from '../pages/l18/l18';
import { L19Page } from '../pages/l19/l19';
import { L20Page } from '../pages/l20/l20';
import { L21Page } from '../pages/l21/l21';
import { L22Page } from '../pages/l22/l22';
import { L23Page } from '../pages/l23/l23';
import { L24Page } from '../pages/l24/l24';
import { L25Page } from '../pages/l25/l25';
import { L26Page } from '../pages/l26/l26';
import { L27Page } from '../pages/l27/l27';
import { L28Page } from '../pages/l28/l28';
import { L29Page } from '../pages/l29/l29';
import { L30Page } from '../pages/l30/l30';

import { Level1finishedPage } from '../pages/level1finished/level1finished';
import { Level2finishedPage } from '../pages/level2finished/level2finished';
import { Level3finishedPage } from '../pages/level3finished/level3finished';
import { HomefinishedPage } from '../pages/homefinished/homefinished';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataProvider } from '../providers/data/data';
import { TrainerProvider } from '../providers/data/trainer';
import { Cards1Provider } from '../providers/data/cards1';

@NgModule({
  declarations: [
    MyApp,
    TrainerPage,
    InfoPage,
    Cards1Page,
    Cards2Page,
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
    L11Page,
    L12Page,
    L13Page,
    L14Page,
    L15Page,
    L16Page,
    L17Page,
    L18Page,
    L19Page,
    L20Page,
    L21Page,
    L22Page,
    L23Page,
    L24Page,
    L25Page,
    L26Page,
    L27Page,
    L28Page,
    L29Page,
    L30Page,
    Level1finishedPage,
    Level2finishedPage,
    Level3finishedPage,
    HomefinishedPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrainerPage,
    InfoPage,
    Cards1Page,
    Cards2Page,
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
    L11Page,
    L12Page,
    L13Page,
    L14Page,
    L15Page,
    L16Page,
    L17Page,
    L18Page,
    L19Page,
    L20Page,
    L21Page,
    L22Page,
    L23Page,
    L24Page,
    L25Page,
    L26Page,
    L27Page,
    L28Page,
    L29Page,
    L30Page,
    Level1finishedPage,
    Level2finishedPage,
    Level3finishedPage,
    HomefinishedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    TrainerProvider,
    Cards1Provider
  ]
})
export class AppModule {}
