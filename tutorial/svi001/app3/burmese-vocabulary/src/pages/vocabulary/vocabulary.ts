import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Vocabulary } from '../../data/vocabulary.interface';

@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage implements OnInit {
	
	vocabularyGroup: {category: string, vocabulary: Vocabulary[], icon: string};
	
	constructor(
		private navParams: NavParams
		) {}
	
	ngOnInit() {
		this.vocabularyGroup = this.navParams.data;
	}

}
