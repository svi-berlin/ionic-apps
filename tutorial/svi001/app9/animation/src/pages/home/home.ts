import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { L1Page } from '../l1/l1';
import { L2Page } from '../l2/l2';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	level1Finished: boolean = false;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	startLevel(level: number) {
  			if (level==1) {
  				this.navCtrl.push(L1Page);	
  			}
  			if (level==2) {
  				this.navCtrl.push(L2Page);	
  			}
  	}

}