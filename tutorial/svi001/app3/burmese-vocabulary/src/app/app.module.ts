import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LibraryPage } from '../pages/library/library';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { TabsPage } from '../pages/tabs/tabs';
import { Lesson1Page } from '../pages/lesson1/lesson1';
import { Lesson2Page } from '../pages/lesson2/lesson2';
import { Lesson3Page } from '../pages/lesson3/lesson3';
import { Lesson4Page } from '../pages/lesson4/lesson4';
import { Lesson5Page } from '../pages/lesson5/lesson5';
import { ReadingPage } from '../pages/reading/reading';
import { ChatPage } from '../pages/chat/chat';
import { ChatMessagesService } from '../services/chat-messages';
import { SmartAudio } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibraryPage,
    VocabularyPage,
    FlashCardComponent,
    TabsPage,
    Lesson1Page,
    Lesson2Page,
    Lesson3Page,
    Lesson4Page,
    Lesson5Page,
    ReadingPage,
    ChatPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibraryPage,
    VocabularyPage,
    TabsPage,
    Lesson1Page,
    Lesson2Page,
    Lesson3Page,
    Lesson4Page,
    Lesson5Page,
    ReadingPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatMessagesService,
    SmartAudio,
    NativeAudio
  ]
})
export class AppModule {}
