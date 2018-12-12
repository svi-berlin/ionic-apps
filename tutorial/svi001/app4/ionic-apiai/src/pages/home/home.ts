import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  answer;

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
	  ApiAIPromises.init({
	    clientAccessToken: "a9b04619a39347b7bf315c4db8c9e658"
	  }).then(result => console.log(result));
	});
  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }
}