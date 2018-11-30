import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'page-lesson1',
  templateUrl: 'lesson1.html',
})

export class Lesson1Page {

	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public smartAudio: SmartAudio) {
  	}

    playAudio(mp3) {    	
        this.smartAudio.play(mp3);
    }

}
