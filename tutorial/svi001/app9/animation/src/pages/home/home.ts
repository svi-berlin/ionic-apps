import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
  	trigger('myvisibility', [
  		state('visible', style({
  			opacity: 1
  		})),
  		state('invisible', style({
  			opacity: 0
  		}))
  	])
  ]
})
export class HomePage {
	
	visibleState = 'visible';

  	constructor(public navCtrl: NavController) {

  	}

  	toggleVisibility() {
  		this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  	}

}
