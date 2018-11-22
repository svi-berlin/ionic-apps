import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Vocabulary } from '../../data/vocabulary.interface';
// import { VocabularyService } from '../../services/vocabulary';

@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage implements OnInit {
	
	vocabularyGroup: {category: string, vocabulary: Vocabulary[], icon: string};
	
	constructor(
		private navParams: NavParams,
		private alertCtrl: AlertController,
		//private vocabularyService: VocabularyService
		) {}
	
	ngOnInit() {
		this.vocabularyGroup = this.navParams.data;
	}

	onAddToFavorite(selectedQuote: Quote) {
		const alert = this.alertCtrl.create({
			title: 'Add Quote',
			subTitle: 'Are you sure?',
			message: 'Are you sure you want to add the quote?',
			buttons: [
				{
					text: 'yes',
					handler: () => {
						this.quotesService.addQuoteToFavorites(selectedQuote);
						console.log('yes');
					}
				},
				{
					text: 'no',
					role: 'cancel',
					handler: () => {
						console.log('no');
					}
				}
			]
		});
		alert.present();
	}
}
