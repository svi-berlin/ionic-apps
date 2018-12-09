import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';
import { L7Page } from '../l7/l7';

@Component({
  selector: 'page-l6',
  templateUrl: 'l6.html',
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

export class L6Page {
  
  visibleState: string   = 'visible'; 
  applyClass: boolean    = false;
  
  applyClass_1: boolean  = false;
  applyClass_2: boolean  = false;
  applyClass_3: boolean  = false;
  applyClass_4: boolean  = false;
  applyClass_5: boolean  = false;
  applyClass_6: boolean  = false;


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
            this.navCtrl.push(L7Page);
        }, 2500);
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
