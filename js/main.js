var deckOfCards = [
    {
        name: "Ace of Hearts",
        value: 11,
    },
    {
        name: "Two of Hearts",
        value: 2, 
    },
    {
        name: "Three of Hearts",
        value: 3,
    }, 
    {
        name: "Four of Hearts",
        value: 4,
    },
    {
        name: "Five of Hearts",
        value: 5,
    },
    {
        name: "Six of Hearts",
        value: 6,
    },
    {
        name: "Seven of Hearts",
        value: 7,
    },
    {
        name: "Eight of Hearts",
        value: 8,
    },
    {
        name: "Nine of Hearts",
        value: 9,
    }, 
    {
        name: "Ten of Hearts",
        value: 10,
    },
    {
        name: "Jack of Hearts",
        value: 10,
    },
    {
        name: "Queen of Hearts",
        value: 10,
    },
    {
        name: "King of Hearts",
        value: 10,
    },
    {
        name: "Ace of Spades",
        value: 11,
    },
    {
        name: "Two of Spades",
        value: 2, 
    },
    {
        name: "Three of Spades",
        value: 3,
    }, 
    {
        name: "Four of Spades",
        value: 4,
    },
    {
        name: "Five of Spades",
        value: 5,
    },
    {
        name: "Six of Spades",
        value: 6,
    },
    {
        name: "Seven of Spades",
        value: 7,
    },
    {
        name: "Eight of Spades",
        value: 8,
    },
    {
        name: "Nine of Spades",
        value: 9,
    }, 
    {
        name: "Ten of Spades",
        value: 10,
    },
    {
        name: "Jack of Spades",
        value: 10,
    },
    {
        name: "Queen of Spades",
        value: 10,
    },
    {
        name: "King of Spades",
        value: 10,
    },
    {
        name: "Ace of Diamonds",
        value: 11,
    },
    {
        name: "Two of Diamonds",
        value: 2, 
    },
    {
        name: "Three of Diamonds",
        value: 3,
    }, 
    {
        name: "Four of Diamonds",
        value: 4,
    },
    {
        name: "Five of Diamonds",
        value: 5,
    },
    {
        name: "Six of Diamonds",
        value: 6,
    },
    {
        name: "Seven of Diamonds",
        value: 7,
    },
    {
        name: "Eight of Diamonds",
        value: 8,
    },
    {
        name: "Nine of Diamonds",
        value: 9,
    }, 
    {
        name: "Ten of Diamonds",
        value: 10,
    },
    {
        name: "Jack of Diamonds",
        value: 10,
    },
    {
        name: "Queen of Diamonds",
        value: 10,
    },
    {
        name: "King of Diamonds",
        value: 10,
    },
    {
        name: "Ace of Clubs",
        value: 11,
    },
    {
        name: "Two of Clubs",
        value: 2, 
    },
    {
        name: "Three of Clubs",
        value: 3,
    }, 
    {
        name: "Four of Clubs",
        value: 4,
    },
    {
        name: "Five of Clubs",
        value: 5,
    },
    {
        name: "Six of Clubs",
        value: 6,
    },
    {
        name: "Seven of Clubs",
        value: 7,
    },
    {
        name: "Eight of Clubs",
        value: 8,
    },
    {
        name: "Nine of Clubs",
        value: 9,
    }, 
    {
        name: "Ten of Clubs",
        value: 10,
    },
    {
        name: "Jack of Clubs",
        value: 10,
    },
    {
        name: "Queen of Clubs",
        value: 10,
    },
    {
        name: "King of Clubs",
        value: 10,
    }
]

function randomCard() {
    var cardIndex = Math.round(Math.random() * 52);
    return deckOfCards[cardIndex];
}

//Create a function that looks through usedCards array and make sure the number isn't in there. If it is, loop back and find a different number card. 

// Get one random card and assign to dealer. Hide this card.
// Get one random card and assign to player. Display this card. 
// Get one random card and assign to dealer. Display this card. 
// Get one random card and assign it to player. Display this card. 

function startingCards() {
    var dealerCardOne = randomCard();
    var playerCardOne = randomCard();
    var dealerCardTwo = randomCard();
    var playerCardTwo = randomCard();
    dealerCards.push(dealerCardOne);
    dealerCards.push(dealerCardTwo)
    playerCards.push(playerCardOne);
    playerCards.push(playerCardTwo);
    return [dealerCards, playerCards];
};

//Push dealer cards into dealer array. 
var dealerCards = [];
//Return dealer score
var dealerScore;

function calculateDealerScore(){
    var dealerScore = 0;
    for (i = 0; i < dealerCards.length; i++){
        dealerScore = dealerCards[i].value + dealerScore;
    }
    return dealerScore;
}
//Advanced feature. If dealer score = 21, display Blackjack.

//Push player cards into player array. 
var playerCards = [];
//Return player Score
var playerScore;

function calculatePlayerScore(){
    var playerScore = 0;
    for (i = 0; i < playerCards.length; i++){
        playerScore = playerCards[i].value + playerScore;
    }
    return playerScore;
}

//Create a Stay Button for player. 
// Create "Hit" button for player. When player selects "hit" get a new random card and add to player array. Display the card.
//Advanced: Create Double Button for player. 

//Advanced: Create Split Button for player. 
//If playerCards[0].value === playerCards[1].value, then create Split Button. 

//IF player hits Stay, push playerCards into usedCards array. 

var usedCards = [];


//Start button click handler. 
$('#startButton').on('click', function(){
    console.log("Start the game!");
});