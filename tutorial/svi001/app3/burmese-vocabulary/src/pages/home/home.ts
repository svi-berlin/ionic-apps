import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lesson1Page } from '../lesson1/lesson1';
import { Lesson2Page } from '../lesson2/lesson2';
import { Lesson3Page } from '../lesson3/lesson3';
import { Lesson4Page } from '../lesson4/lesson4';
import { Lesson5Page } from '../lesson5/lesson5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	lesson1Page = Lesson1Page;
	lesson2Page = Lesson2Page;
	lesson3Page = Lesson3Page;
	lesson4Page = Lesson4Page;
	lesson5Page = Lesson5Page;

}
