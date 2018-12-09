import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	level1Finished: boolean = false;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}


}