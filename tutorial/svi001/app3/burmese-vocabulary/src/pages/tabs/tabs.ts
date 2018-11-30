import { Component } from '@angular/core';
import { ReadingPage } from '../reading/reading';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
	readingPage = ReadingPage;
}