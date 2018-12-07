import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';

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
  visibleStateResult = 'invisible';
  

  applyClass: boolean = false;
  applyClass_1: boolean = false;
  applyClass_2: boolean = false;
  applyClass_3: boolean = false;

  constructor(public smartAudio: SmartAudio) {

  }

  playAudio(mp3) {      
    this.smartAudio.play(mp3);
  }

  giveAnswer(answer) {
   
   if (answer == 1) {
    this.applyClass_1 = true;
    this.visibleState = 'invisible';
    this.visibleStateResult = 'visible';
    this.playAudio('applause');
   }
   
   if (answer == 2) {
    this.applyClass_2 = true;
   }
   if (answer == 3) {
    this.applyClass_3 = true;
   }

  }
  	


}
