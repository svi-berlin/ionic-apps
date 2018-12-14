import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Level2finishedPage } from '../level2finished/level2finished';
import { Level3finishedPage } from '../level3finished/level3finished';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
	constructor(public navCtrl: NavController) {
	}
	startLevel(level: number) {
		if (level==0) {
        	this.navCtrl.push(InfoPage);  
      	}
      	if (level==100) {
        	this.navCtrl.push(Level2finishedPage);  
      	}
        if (level==200) {
          this.navCtrl.push(Level3finishedPage);  
        }
      
	}
}