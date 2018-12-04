import { Component } from '@angular/core';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})

export class ReadingPage {
  
  constructor(
    public smartAudio: SmartAudio) { }
    
 
    playAudio() {
        this.smartAudio.play('001-ne-kaun-la');
    }



  	

}
