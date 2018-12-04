import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../../data/vocabulary.interface';
import vocabulary from '../../data/vocabulary';
import { VocabularyPage } from '../vocabulary/vocabulary';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})

export class LibraryPage implements OnInit {
	vocabularyCollection: {category: string, vocabulary: Vocabulary[], icon: string}[];
	vocabularyPage = VocabularyPage;
	ngOnInit() {
		this.vocabularyCollection = vocabulary;
	}
}

