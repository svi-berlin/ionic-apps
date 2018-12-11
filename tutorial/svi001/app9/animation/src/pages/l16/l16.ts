import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
// console.log
import { L17Page } from '../l17/l17';

@Component({
  selector: 'page-l16',
  templateUrl: 'l16.html',
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

export class L16Page {
	
  visibleState: string   = 'visible'; 
  applyClass: boolean    = false;
  applyClass_1: boolean  = false;
  applyClass_2: boolean  = false;
  applyClass_3: boolean  = false;
  applyClass_4: boolean  = false;
  applyClass_5: boolean  = false;
  applyClass_6: boolean  = false;

  falseAnswers: number = 0;

  constructor(public navCtrl: NavController) {

  }
  giveAnswer(answer) {
   if (answer == 1) {
    if (this.applyClass_1 == false) {
      this.applyClass_1 = true;
      this.visibleState = 'invisible';
      setTimeout(() => {
            this.navCtrl.push(L17Page);
        }, 1500);
    } 
   } else {
    this.falseAnswers++;
    if (this.falseAnswers > 2) {
      this.falseAnswers = 0;
      this.navCtrl.popToRoot();
    }
   }
   if (answer == 2) {
    this.applyClass_2 = true;
   }
   if (answer == 3) {
    this.applyClass_3 = true;
   }
   if (answer == 4) {
    this.applyClass_4 = true;
   }
  if (answer == 5) {
    this.applyClass_5 = true;
   }
  if (answer == 6) {
    this.applyClass_6 = true;
   }
  }
}
