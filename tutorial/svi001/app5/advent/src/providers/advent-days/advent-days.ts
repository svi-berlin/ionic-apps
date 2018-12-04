import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
interface AdventDay {
    front: string,
    unlockAt: string,
    flipped: boolean,
    content: string
}
 
@Injectable()
export class AdventDaysProvider {
 
    public adventDays: AdventDay[];
 
    constructor(private storage: Storage) {
 
    }
 
    loadDays(){
 
        this.storage.get('adventDays').then((days) => {
 
            if(days !== null){
 
                this.adventDays = days;
 
            } else {
 
                this.adventDays = [
                    {front: '1', unlockAt: 'December 1, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '2', unlockAt: 'December 2, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '3', unlockAt: 'December 3, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '4', unlockAt: 'December 4, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '5', unlockAt: 'December 5, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '6', unlockAt: 'December 6, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '7', unlockAt: 'December 7, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '8', unlockAt: 'December 8, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '9', unlockAt: 'December 9, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '10', unlockAt: 'December 10, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '11', unlockAt: 'December 11, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '12', unlockAt: 'December 12, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '13', unlockAt: 'December 13, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '14', unlockAt: 'December 14, 2018 00:00:00', flipped: false, content: 'A partridge in a pear tree'},
                    {front: '15', unlockAt: 'December 15, 2018 00:00:00', flipped: false, content: 'Two turtle doves'},
                    {front: '16', unlockAt: 'December 16, 2018 00:00:00', flipped: false, content: 'Three French hens'},
                    {front: '17', unlockAt: 'December 17, 2018 00:00:00', flipped: false, content: 'Four calling birds'},
                    {front: '18', unlockAt: 'December 18, 2018 00:00:00', flipped: false, content: 'Five golden rings!'},
                    {front: '19', unlockAt: 'December 19, 2018 00:00:00', flipped: false, content: 'Six geese a laying'},
                    {front: '20', unlockAt: 'December 20, 2018 00:00:00', flipped: false, content: 'Seven swans a swimming'},
                    {front: '21', unlockAt: 'December 21, 2018 00:00:00', flipped: false, content: 'Eight maids a milking'},
                    {front: '22', unlockAt: 'December 22, 2018 00:00:00', flipped: false, content: 'Nine ladies dancing'},
                    {front: '23', unlockAt: 'December 23, 2018 00:00:00', flipped: false, content: 'Ten lords a leaping'},
                    {front: '24', unlockAt: 'December 24, 2018 00:00:00', flipped: false, content: 'Eleven pipers piping'},
                    {front: '25', unlockAt: 'December 25, 2018 00:00:00', flipped: false, content: '12 drummers drumming'}
                ];
 
            }
 
        });
 
    }
 
    saveDays(){
 
        this.storage.set('adventDays', this.adventDays);
 
    }
 
    flipDay(day){
 
        if(!day.flipped && new Date(day.unlockAt) < new Date()){
            day.flipped = true;
            this.saveDays();
        }
 
    }
 
}