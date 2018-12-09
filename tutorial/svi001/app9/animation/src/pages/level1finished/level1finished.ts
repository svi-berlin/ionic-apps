import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-level1finished',
  templateUrl: 'level1finished.html'
})

export class Level1finishedPage {
  	
  constructor(
    public smartAudio: SmartAudio) {
  }
  
  playAudio(mp3) {      
    this.smartAudio.play(mp3);
  }

}
