import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrainerProvider } from '../../providers/data/trainer';
 
@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html'
})

export class TrainerPage {

    activeQuestion: number = 0;

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
        
        question.flashCardFlipped = true;
 
        

        if(answer.correct){
            this.score++;
            answer.selected = false;
        } else {
            answer.selected = true;
        }
 
        setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 3000);
    }
 
    nextSlide() {
        this.activeQuestion++;
    }
 
    isHidden(item) {
        if (item == this.activeQuestion) {
            return false;
        } else {
            return true;
        }
    }
 
    
 
    
 
    
 
}