import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrainerProvider } from '../../providers/data/trainer';
 
@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html'
})

export class TrainerPage {
 
    hasAnswered: boolean = false;
    score: number = 0;
 
    slideOptions: any;
    questions: any;
 
    constructor(public navCtrl: NavController, public dataService: TrainerProvider) {
 
    }
 
    ionViewDidLoad() {
        this.dataService.load().then((data) => {
            data.map((question) => {
                return question;
            });    
            this.questions = data;
        });
    }

    selectAnswer(answer, question){
 
        this.hasAnswered = true;
        answer.selected = true;
        question.flashCardFlipped = true;
 console.log(answer.correct);
        if(answer.correct){
            this.score++;
        }
 
        setTimeout(() => {
            this.hasAnswered = false;
           //S this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 3000);
    }
 
 
    
 
    
 
    
 
    
 
}