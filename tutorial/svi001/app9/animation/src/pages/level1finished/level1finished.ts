import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-level1finished',
  templateUrl: 'level1finished.html'
})

export class Level1finishedPage {
  
  success: boolean = false;	

  constructor(
    public smartAudio: SmartAudio) {
  }

  ionViewDidLoad() {
  	this.success = true;
    this.playAudio('applause');
  }
  
  playAudio(mp3) {      
    this.smartAudio.play(mp3);
  }

}
