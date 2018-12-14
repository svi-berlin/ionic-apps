import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cards2Page } from '../cards2/cards2';

@Component({
  selector: 'page-level3finished',
  templateUrl: 'level3finished.html'
})

export class Level3finishedPage {
    constructor(public navCtrl: NavController) {
    }
    nextLevel() {
      this.navCtrl.push(Cards2Page); 
    }
}
