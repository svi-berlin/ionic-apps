import { Quote } from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote) {
		this.favoriteQuotes.push(quote);
		console.log(this.favoriteQuotes);
	}

	removeQuoteToFavorites(quote: Quote) {
		const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
			return quoteElement.id == quote.id;
		} );
		this.favoriteQuotes.splice(position, 1);
	}

	getFavoriteQuotes() {
		console.log(this.favoriteQuotes);
		return this.favoriteQuotes.slice();
	}
}