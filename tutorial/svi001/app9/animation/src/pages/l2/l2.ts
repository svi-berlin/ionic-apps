import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';
import { L3Page } from '../l3/l3';

@Component({
  selector: 'page-l2',
  templateUrl: 'l2.html',
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

export class L2Page {
	
	visibleState: string   = 'visible'; 
  applyClass: boolean    = false;
  applyClass_1: boolean  = false;
  applyClass_2: boolean  = false;
  applyClass_3: boolean  = false;

  constructor(
    public smartAudio: SmartAudio, 
    public navCtrl: NavController) {

  }

  playAudio(mp3) {      
    this.smartAudio.play(mp3);
  }

  giveAnswer(answer) {
   
   if (answer == 1) {
    if (this.applyClass_1 == false) {
      this.applyClass_1 = true;
      this.visibleState = 'invisible';
      this.playAudio('applause');


      setTimeout(() => {
          console.log('hi');
            this.navCtrl.push(L2Page);
        }, 2500);


    } else {
      // 
    }
   }
   
   if (answer == 2) {
    this.applyClass_2 = true;
   }
   if (answer == 3) {
    this.applyClass_3 = true;
   }

  }
  	


}