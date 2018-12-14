import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { L1Page } from '../l1/l1';
import { L11Page } from '../l11/l11';
import { L21Page } from '../l21/l21';
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
      else if (level==1) {
				this.navCtrl.push(L1Page);	
			}
			else if (level==2) {
				this.navCtrl.push(L11Page);	
			}
      else if (level==3) {
        this.navCtrl.push(L21Page); 
      }
	}
}