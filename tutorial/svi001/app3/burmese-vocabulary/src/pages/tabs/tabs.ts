import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ReadingPage } from '../reading/reading';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
	
	homePage = HomePage;
	readingPage = ReadingPage;

	constructor(public smartAudio: SmartAudio) {
 
    }
 
    changeTab() {
        this.smartAudio.play('tabSwitch');
    }
	
}