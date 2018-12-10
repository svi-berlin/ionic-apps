import { Component } from '@angular/core';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  selector: 'page-level1finished',
  templateUrl: 'level1finished.html'
})

export class Level1finishedPage {
  	
  constructor(
    public smartAudio: SmartAudio) {
    this.playAudio('applause');
  }
  
  playAudio(mp3) {      
    this.smartAudio.play(mp3);
  }

}
