import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {	
	homePage = HomePage;
	listPage = ListPage;
}