import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cards1Page } from '../cards1/cards1';

@Component({
  selector: 'page-level2finished',
  templateUrl: 'level2finished.html'
})

export class Level2finishedPage {
    constructor(public navCtrl: NavController) {
    }
    nextLevel() {
      this.navCtrl.push(Cards1Page); 
  	}
}
