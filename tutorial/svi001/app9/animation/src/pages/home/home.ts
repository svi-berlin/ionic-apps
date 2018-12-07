import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  		})),
  		transition('* => *', animate('.5s'))
  	])
  ]
})

export class HomePage {
	
	visibleState = 'visible';
  applyClass: boolean = false;

  toggleVisibility() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
    this.applyClass = true;
  }

  	


}
