import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage implements OnInit {
    ;
	   quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}
    
  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ReadingPage');
  	}

  	ngOnInit() {
		this.quoteCollection = quotes;
    console.log(quotes);
	}

}
