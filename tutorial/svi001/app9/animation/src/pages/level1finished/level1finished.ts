import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { L1Page } from '../l1/l1';
import { L11Page } from '../l11/l11';
import { L21Page } from '../l21/l21';

@Component({
  selector: 'page-level1finished',
  templateUrl: 'level1finished.html'
})

export class Level1finishedPage {
  	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	startLevel(level: number) {
  			if (level==1) {
  				this.navCtrl.push(L1Page);	
  			}
  			if (level==2) {
  				this.navCtrl.push(L11Page);	
  			}
        if (level==3) {
          this.navCtrl.push(L21Page); 
        }
  	}
  
}
