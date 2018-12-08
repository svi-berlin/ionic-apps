import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { L1Page } from '../l1/l1';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
	homePage = HomePage;
	l1Page = L1Page;
}
