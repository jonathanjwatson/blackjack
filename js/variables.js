// $(function() {
    
	var deckOfCards = [{
		name: "Ace of Hearts",
		value: 11,
		src: "images/card-images/ace_of_hearts.png"
	}, {
		name: "Two of Hearts",
		value: 2,
		src: "images/card-images/2_of_hearts.png"
	}, {
		name: "Three of Hearts",
		value: 3,
		src: "images/card-images/3_of_hearts.png"
	}, {
		name: "Four of Hearts",
		value: 4,
		src: "images/card-images/4_of_hearts.png"
	}, {
		name: "Five of Hearts",
		value: 5,
		src: "images/card-images/5_of_hearts.png"
	}, {
		name: "Six of Hearts",
		value: 6,
		src: "images/card-images/6_of_hearts.png"
	}, {
		name: "Seven of Hearts",
		value: 7,
		src: "images/card-images/7_of_hearts.png"
	}, {
		name: "Eight of Hearts",
		value: 8,
		src: "images/card-images/8_of_hearts.png"
	}, {
		name: "Nine of Hearts",
		value: 9,
		src: "images/card-images/9_of_hearts.png"
	}, {
		name: "Ten of Hearts",
		value: 10,
		src: "images/card-images/10_of_hearts.png"
	}, {
		name: "Jack of Hearts",
		value: 10,
		src: "images/card-images/jack_of_hearts.png"
	}, {
		name: "Queen of Hearts",
		value: 10,
		src: "images/card-images/queen_of_hearts.png"
	}, {
		name: "King of Hearts",
		value: 10,
		src: "images/card-images/king_of_hearts.png"
	}, {
		name: "Ace of Spades",
		value: 11,
		src: "images/card-images/ace_of_spades.png"
	}, {
		name: "Two of Spades",
		value: 2,
		src: "images/card-images/2_of_spades.png"
	}, {
		name: "Three of Spades",
		value: 3,
		src: "images/card-images/3_of_spades.png"
	}, {
		name: "Four of Spades",
		value: 4,
		src: "images/card-images/4_of_spades.png"
	}, {
		name: "Five of Spades",
		value: 5,
		src: "images/card-images/5_of_spades.png"
	}, {
		name: "Six of Spades",
		value: 6,
		src: "images/card-images/6_of_spades.png"
	}, {
		name: "Seven of Spades",
		value: 7,
		src: "images/card-images/7_of_spades.png"
	}, {
		name: "Eight of Spades",
		value: 8,
		src: "images/card-images/8_of_spades.png"
	}, {
		name: "Nine of Spades",
		value: 9,
		src: "images/card-images/9_of_spades.png"
	}, {
		name: "Ten of Spades",
		value: 10,
		src: "images/card-images/10_of_spades.png"
	}, {
		name: "Jack of Spades",
		value: 10,
		src: "images/card-images/jack_of_spades.png"
	}, {
		name: "Queen of Spades",
		value: 10,
		src: "images/card-images/queen_of_spades.png"
	}, {
		name: "King of Spades",
		value: 10,
		src: "images/card-images/king_of_spades.png"
	}, {
		name: "Ace of Diamonds",
		value: 11,
		src: "images/card-images/ace_of_diamonds.png"
	}, {
		name: "Two of Diamonds",
		value: 2,
		src: "images/card-images/2_of_diamonds.png"
	}, {
		name: "Three of Diamonds",
		value: 3,
		src: "images/card-images/3_of_diamonds.png"
	}, {
		name: "Four of Diamonds",
		value: 4,
		src: "images/card-images/4_of_diamonds.png"
	}, {
		name: "Five of Diamonds",
		value: 5,
		src: "images/card-images/5_of_diamonds.png"
	}, {
		name: "Six of Diamonds",
		value: 6,
		src: "images/card-images/6_of_diamonds.png"
	}, {
		name: "Seven of Diamonds",
		value: 7,
		src: "images/card-images/7_of_diamonds.png"
	}, {
		name: "Eight of Diamonds",
		value: 8,
		src: "images/card-images/8_of_diamonds.png"
	}, {
		name: "Nine of Diamonds",
		value: 9,
		src: "images/card-images/9_of_diamonds.png"
	}, {
		name: "Ten of Diamonds",
		value: 10,
		src: "images/card-images/10_of_diamonds.png"
	}, {
		name: "Jack of Diamonds",
		value: 10,
		src: "images/card-images/jack_of_diamonds.png"
	}, {
		name: "Queen of Diamonds",
		value: 10,
		src: "images/card-images/queen_of_diamonds.png"
	}, {
		name: "King of Diamonds",
		value: 10,
		src: "images/card-images/king_of_diamonds.png"
	}, {
		name: "Ace of Clubs",
		value: 11,
		src: "images/card-images/ace_of_clubs.png"
	}, {
		name: "Two of Clubs",
		value: 2,
		src: "images/card-images/2_of_clubs.png"
	}, {
		name: "Three of Clubs",
		value: 3,
		src: "images/card-images/3_of_clubs.png"
	}, {
		name: "Four of Clubs",
		value: 4,
		src: "images/card-images/4_of_clubs.png"
	}, {
		name: "Five of Clubs",
		value: 5,
		src: "images/card-images/5_of_clubs.png"
	}, {
		name: "Six of Clubs",
		value: 6,
		src: "images/card-images/6_of_clubs.png"
	}, {
		name: "Seven of Clubs",
		value: 7,
		src: "images/card-images/7_of_clubs.png"
	}, {
		name: "Eight of Clubs",
		value: 8,
		src: "images/card-images/8_of_clubs.png"
	}, {
		name: "Nine of Clubs",
		value: 9,
		src: "images/card-images/9_of_clubs.png"
	}, {
		name: "Ten of Clubs",
		value: 10,
		src: "images/card-images/10_of_clubs.png"
	}, {
		name: "Jack of Clubs",
		value: 10,
		src: "images/card-images/jack_of_clubs.png"
	}, {
		name: "Queen of Clubs",
		value: 10,
		src: "images/card-images/queen_of_clubs.png"
	}, {
		name: "King of Clubs",
		value: 10,
		src: "images/card-images/king_of_clubs.png"
    }];
    var topLevelVariables = {
        dealerCardOne: null,
        playerCardOne: null,
        dealerCardTwo: null,
        playerCardTwo: null,
        playerCardNext: null,
        dealerCardNext: null,
        playerCards: [],
        dealerCards: [],
        usedCards: [],
        dealerScore: 0,
        playerScore: 0,
        playerFinish: false,
        playerBust: false,
        dealerFinish: false,
		dealerBust: false,
		playerWin: false,
		dealerWin: false,
		playerBlackJack: false,
		dealerBlackJack: false,
        newDealButton: false,
        winScore: 0,
        lossScore: 0,
        $dealerHand: $('#dealerHand'),
		$playerHand: $('#playerHand'),
		multiplier: 1
    }
    var bettingVariables = {
        playerTotal: 1000,
        playerBet: 100,
    }
// });