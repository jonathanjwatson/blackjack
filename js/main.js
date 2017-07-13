$(function() {

var deckOfCards = [
    {
        name: "Ace of Hearts",
        value: 11,
        src: "images/card-images/ace_of_hearts.png"
    },
    {
        name: "Two of Hearts",
        value: 2, 
        src: "images/card-images/2_of_hearts.png"
    },
    {
        name: "Three of Hearts",
        value: 3,
        src: "images/card-images/3_of_hearts.png"
    }, 
    {
        name: "Four of Hearts",
        value: 4,
        src: "images/card-images/4_of_hearts.png"
    },
    {
        name: "Five of Hearts",
        value: 5,
        src: "images/card-images/5_of_hearts.png"      
    },
    {
        name: "Six of Hearts",
        value: 6,
        src: "images/card-images/6_of_hearts.png"   
    },
    {
        name: "Seven of Hearts",
        value: 7,
        src: "images/card-images/7_of_hearts.png"   
    },
    {
        name: "Eight of Hearts",
        value: 8,
        src: "images/card-images/8_of_hearts.png"   
    },
    {
        name: "Nine of Hearts",
        value: 9,
        src: "images/card-images/9_of_hearts.png"   
    }, 
    {
        name: "Ten of Hearts",
        value: 10,
        src: "images/card-images/10_of_hearts.png"   
    },
    {
        name: "Jack of Hearts",
        value: 10,
        src: "images/card-images/jack_of_hearts.png"   
    },
    {
        name: "Queen of Hearts",
        value: 10,
        src: "images/card-images/queen_of_hearts.png"   
    },
    {
        name: "King of Hearts",
        value: 10,
        src: "images/card-images/king_of_hearts.png"   
    },
    {
        name: "Ace of Spades",
        value: 11,
        src: "images/card-images/ace_of_spades.png"
    },
    {
        name: "Two of Spades",
        value: 2, 
        src: "images/card-images/2_of_spades.png"
    },
    {
        name: "Three of Spades",
        value: 3,
        src: "images/card-images/3_of_spades.png"
    }, 
    {
        name: "Four of Spades",
        value: 4,
        src: "images/card-images/4_of_spades.png"
    },
    {
        name: "Five of Spades",
        value: 5,
        src: "images/card-images/5_of_spades.png"      
    },
    {
        name: "Six of Spades",
        value: 6,
        src: "images/card-images/6_of_spades.png"   
    },
    {
        name: "Seven of Spades",
        value: 7,
        src: "images/card-images/7_of_spades.png"   
    },
    {
        name: "Eight of Spades",
        value: 8,
        src: "images/card-images/8_of_spades.png"   
    },
    {
        name: "Nine of Spades",
        value: 9,
        src: "images/card-images/9_of_spades.png"   
    }, 
    {
        name: "Ten of Spades",
        value: 10,
        src: "images/card-images/10_of_spades.png"   
    },
    {
        name: "Jack of Spades",
        value: 10,
        src: "images/card-images/jack_of_spades.png"   
    },
    {
        name: "Queen of Spades",
        value: 10,
        src: "images/card-images/queen_of_spades.png"   
    },
    {
        name: "King of Spades",
        value: 10,
        src: "images/card-images/king_of_spades.png"   
    },
    {
        name: "Ace of Diamonds",
        value: 11,
        src: "images/card-images/ace_of_diamonds.png"
    },
    {
        name: "Two of Diamonds",
        value: 2, 
        src: "images/card-images/2_of_diamonds.png"
    },
    {
        name: "Three of Diamonds",
        value: 3,
        src: "images/card-images/3_of_diamonds.png"
    }, 
    {
        name: "Four of Diamonds",
        value: 4,
        src: "images/card-images/4_of_diamonds.png"
    },
    {
        name: "Five of Diamonds",
        value: 5,
        src: "images/card-images/5_of_diamonds.png"      
    },
    {
        name: "Six of Diamonds",
        value: 6,
        src: "images/card-images/6_of_diamonds.png"   
    },
    {
        name: "Seven of Diamonds",
        value: 7,
        src: "images/card-images/7_of_diamonds.png"   
    },
    {
        name: "Eight of Diamonds",
        value: 8,
        src: "images/card-images/8_of_diamonds.png"   
    },
    {
        name: "Nine of Diamonds",
        value: 9,
        src: "images/card-images/9_of_diamonds.png"   
    }, 
    {
        name: "Ten of Diamonds",
        value: 10,
        src: "images/card-images/10_of_diamonds.png"   
    },
    {
        name: "Jack of Diamonds",
        value: 10,
        src: "images/card-images/jack_of_diamonds.png"   
    },
    {
        name: "Queen of Diamonds",
        value: 10,
        src: "images/card-images/queen_of_diamonds.png"   
    },
    {
        name: "King of Diamonds",
        value: 10,
        src: "images/card-images/king_of_diamonds.png"   
    },
    {
        name: "Ace of Clubs",
        value: 11,
        src: "images/card-images/ace_of_clubs.png"
    },
    {
        name: "Two of Clubs",
        value: 2, 
        src: "images/card-images/2_of_clubs.png"
    },
    {
        name: "Three of Clubs",
        value: 3,
        src: "images/card-images/3_of_clubs.png"
    }, 
    {
        name: "Four of Clubs",
        value: 4,
        src: "images/card-images/4_of_clubs.png"
    },
    {
        name: "Five of Clubs",
        value: 5,
        src: "images/card-images/5_of_clubs.png"      
    },
    {
        name: "Six of Clubs",
        value: 6,
        src: "images/card-images/6_of_clubs.png"   
    },
    {
        name: "Seven of Clubs",
        value: 7,
        src: "images/card-images/7_of_clubs.png"   
    },
    {
        name: "Eight of Clubs",
        value: 8,
        src: "images/card-images/8_of_clubs.png"   
    },
    {
        name: "Nine of Clubs",
        value: 9,
        src: "images/card-images/9_of_clubs.png"   
    }, 
    {
        name: "Ten of Clubs",
        value: 10,
        src: "images/card-images/10_of_clubs.png"   
    },
    {
        name: "Jack of Clubs",
        value: 10,
        src: "images/card-images/jack_of_clubs.png"   
    },
    {
        name: "Queen of Clubs",
        value: 10,
        src: "images/card-images/queen_of_clubs.png"   
    },
    {
        name: "King of Clubs",
        value: 10,
        src: "images/card-images/king_of_clubs.png"   
    }
];

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
}

var TopGameControllers = {
        resetCards: function() {
        topLevelVariables.dealerCardOne = null;
        topLevelVariables.playerCardOne = null;
        topLevelVariables.dealerCardTwo = null;
        topLevelVariables.playerCardTwo = null;
        topLevelVariables.dealerCards = [];
        topLevelVariables.playerCards = [];
        topLevelVariables.dealerScore = 0;
        topLevelVariables.playerScore = 0;
        $('#dealerCardOne').attr('src', 'images/card-images/back.png');
        $('#dealerCardTwo').attr('src', 'images/card-images/back.png');
        $('#playerCardOne').attr('src', 'images/card-images/back.png');
        $('#playerCardTwo').attr('src', 'images/card-images/back.png');
        $('#playerScore span').text('Player Score');
        $('#dealerScore span').text('Dealer Score');
        $('#dealerHand').html('');
        $('#playerHand').html('');
        $('#dealerHand').append(`<img id="dealerCardOne" src="images/card-images/back.png" />`);
        $('#dealerHand').append(`<img id="dealerCardTwo" src="images/card-images/back.png" />`);
        $('#playerHand').append(`<img id="playerCardOne" src="images/card-images/back.png" />`);
        $('#playerHand').append(`<img id="playerCardTwo" src="images/card-images/back.png" />`);
        $('#alertConsole').html(`<p></p>`);

        
    },
    startingCards: function() {
        topLevelVariables.dealerCardOne = TopGameControllers.randomCard();
        topLevelVariables.playerCardOne = TopGameControllers.randomCard();
        topLevelVariables.dealerCardTwo = TopGameControllers.randomCard();
        topLevelVariables.playerCardTwo = TopGameControllers.randomCard();
        topLevelVariables.dealerCards.push(topLevelVariables.dealerCardOne);
        topLevelVariables.dealerCards.push(topLevelVariables.dealerCardTwo);
        $('#dealerCardTwo').attr('src', topLevelVariables.dealerCardTwo.src);
        topLevelVariables.playerCards.push(topLevelVariables.playerCardOne);
        $('#playerCardOne').attr('src', topLevelVariables.playerCardOne.src);
        topLevelVariables.playerCards.push(topLevelVariables.playerCardTwo);
        $('#playerCardTwo').attr('src', topLevelVariables.playerCardTwo.src);
        return [topLevelVariables.dealerCards, topLevelVariables.playerCards];
    },
    randomCard: function() {
        var cardIndex = Math.floor(Math.random() * 52);
        for (i = 0; i < topLevelVariables.usedCards.length; i++){
            if (cardIndex === topLevelVariables.usedCards[i]){
            console.log("Duplicate Card");
            cardIndex = Math.floor(Math.random() * 52);
            }; 
        };
        topLevelVariables.usedCards.push(cardIndex);
        console.log(topLevelVariables.usedCards);
        // console.log(this.usedcards);
        return deckOfCards[cardIndex];
    },
    resetForNewGame: function() {
        var r = confirm("Play another game?");
        if (r === true) {
            TopGameControllers.resetCards();
        } else {
            txt = "You pressed Cancel!";
        }
    },
    determineWinner: function() {
        if (topLevelVariables.playerBust === true){
            console.log("You lose!");
        } else if (topLevelVariables.dealerBust === true){
            console.log("You win!");
        } else if (topLevelVariables.playerScore > topLevelVariables.dealerScore){
            console.log("You won!");
        } else if (topLevelVariables.dealerScore > topLevelVariables.playerScore){
            console.log("You lose!");
        } else if (topLevelVariables.dealerScore === topLevelVariables.playerScore){
            console.log("It's a push");
        }
    }
}


//Create a function that looks through usedCards array and make sure the number isn't in there. If it is, loop back and find a different number card. 

// Get one random card and assign to dealer. Hide this card.
// Get one random card and assign to player. Display this card. 
// Get one random card and assign to dealer. Display this card. 
// Get one random card and assign it to player. Display this card. 

//add functionality to push cards into usedCards array as soon as they come out. 

var DealerLogicController = {
    hitDealerCard: function() {
        topLevelVariables.dealerCardNext = TopGameControllers.randomCard();
        // console.log(`The Dealer's new card is the ${topLevelVariables.dealerCardNext.name}`);
        topLevelVariables.dealerCards.push(topLevelVariables.dealerCardNext);
        $('#dealerHand').append(`<img src="${topLevelVariables.dealerCardNext.src}" />`);
        return topLevelVariables.dealerCards;
    },
    dealerGameLogic: function() {
        topLevelVariables.playerFinish === true;
        $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
        if (topLevelVariables.dealerScore >=17) {
            $('#alertConsole p').append(`<p>Dealer stands on ${topLevelVariables.dealerScore}</p>`);
            TopGameControllers.determineWinner();
        } else if (topLevelVariables.dealerScore < 17) {
            do {
                DealerLogicController.hitDealerCard();
                console.log("hit dealer card");
                DealerLogicController.calculateDealerScore();
                console.log("calculate dealer score")
                if (topLevelVariables.dealerScore > 21) {
                    topLevelVariables.dealerBust = true;
                    $('#alertConsole p').append(`<p>Dealer busts!</p>`);
                    TopGameControllers.determineWinner();
                    return;
                    // alert("Dealer busts!");
                } else if (topLevelVariables.dealerScore >=17) {
                    console.log(topLevelVariables.dealerScore);
                    $('#alertConsole p').append(`<p>Dealer stands on ${topLevelVariables.dealerScore}</p>`);
                    TopGameControllers.determineWinner();
                    return;
                    // alert("Dealer stands on " + topLevelVariables.dealerScore);
                }
            }
            while (topLevelVariables.dealerScore < 17);

            // console.log("Call hitDealerCard function");
            
            // if (topLevelVariables.dealerScore > 21) {
            //     alert("Dealer busts!");
            // } else if (topLevelVariables.dealerScore >= 17 ){
            // console.log("Dealer stands on " + topLevelVariables.dealerScore);
            // } else if (topLevelVariables.dealerScore < 17){
            // console.log("Call hitDealerCard function");
            // DealerLogicController.hitDealerCard();
            // }
            // DealerLogicController.calculateDealerScore();
        }
    },
    calculateDealerScore: function(){
        topLevelVariables.dealerScore = 0;
        for (i = 0; i < topLevelVariables.dealerCards.length; i++){
            topLevelVariables.dealerScore = topLevelVariables.dealerCards[i].value + topLevelVariables.dealerScore;
        }
        console.log(`Dealer score: ${topLevelVariables.dealerScore}`);
        if (topLevelVariables.dealerCards.length === 2 && topLevelVariables.dealerScore === 21){
            alert("Dealer has blackjack!");
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            //disable player buttons
            return
        } else if (topLevelVariables.playerFinish === true){
            $('#dealerScore span').text(topLevelVariables.dealerScore)
        }

        return topLevelVariables.dealerScore;
}
}

//Push player cards into player array. 

//Return player Score

var PlayerLogicController = {
    calculatePlayerScore: function(){
        topLevelVariables.playerScore = 0;
        for (i = 0; i < topLevelVariables.playerCards.length; i++){
            topLevelVariables.playerScore += topLevelVariables.playerCards[i].value;
        }
        if (topLevelVariables.playerScore === 21 && topLevelVariables.playerCards.length === 2){
            setTimeout(alert("You got Blackjack!"), 3000);
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            TopGameControllers.determineWinner();
        } else if (topLevelVariables.playerScore > 21) {
            for (i = 0; i < topLevelVariables.playerCards.length; i++){
                if (topLevelVariables.playerCards[i].value === 11){
                    topLevelVariables.playerScore -= 10;
                    $('#playerScore span').text(topLevelVariables.playerScore)
                    return
                }
            }
            topLevelVariables.playerBust = true;
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            $('#alertConsole p').append(`<p>You busted!</p>`);
            TopGameControllers.determineWinner();
            
        }
        console.log(`Player Score: ${topLevelVariables.playerScore}`);
        $('#playerScore span').text(topLevelVariables.playerScore)
        return topLevelVariables.playerScore;
    },
    hitPlayerCard: function () {
    topLevelVariables.playerCardNext = TopGameControllers.randomCard();
    console.log(`Your new card is the ${topLevelVariables.playerCardNext.name}`)
    topLevelVariables.playerCards.push(topLevelVariables.playerCardNext);
    $('#playerHand').append(`<img src="${topLevelVariables.playerCardNext.src}" />`);

    return topLevelVariables.playerCards;
    },
    stayPlayerCard: function(){
        console.log("Call calculatePlayerScore function");
        PlayerLogicController.calculatePlayerScore();
        topLevelVariables.playerFinish = true;
        console.log("Call dealerGameLogic function");
        DealerLogicController.dealerGameLogic();
    }
};


//Create a Stay Button for player. 
// Create "Hit" button for player. When player selects "hit" get a new random card and add to player array. Display the card.



//Advanced: Create Double Button for player. 

//Advanced: Create Split Button for player. 
//If playerCards[0].value === playerCards[1].value, then create Split Button. 

//IF player hits Stay, push playerCards into usedCards array. 

//If player points exceeds 21, alert "Bust!" and push playerCards into usedCards array. ;

//Start dealing dealer cards.

//Once Player is done taking cards, show dealer cards, then start taking dealer cards. 

//If 


//When everybody has as many cards as they want, evaluate who has a higher score. 





//Start button click handler. 
// $('#startButton').on('click', runInitialFunction(event));

$('#startButton').click(function() {
  TopGameControllers.startingCards();
  DealerLogicController.calculateDealerScore();
  PlayerLogicController.calculatePlayerScore();
});

$('#hitButton').click(function() {
    console.log("Take another card");
    PlayerLogicController.hitPlayerCard();
    PlayerLogicController.calculatePlayerScore();
    // if (playerScore > 21){
    //     alert("You busted!");
    // }
});

$('#stayButton').click(function() {
    console.log("Stay with your cards");
    PlayerLogicController.stayPlayerCard();
});

$('#resetCardButton').click(function() {
    TopGameControllers.resetCards();
});


// function addCardDisplay() {
//     // console.log(deckOfCards[0].name);
//     // $('#playerHand').append($)
// };

// // console.log(deckOfCards[0]);






});