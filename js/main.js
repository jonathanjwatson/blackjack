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
    newDealButton: false,
    winScore: 0,
    lossScore: 0,
}

var TopGameControllers = {
        resetCards: function() {
        topLevelVariables.dealerCardOne = null;
        topLevelVariables.playerCardOne = null;
        topLevelVariables.dealerCardTwo = null;
        topLevelVariables.playerCardTwo = null;
        topLevelVariables.dealerCards = [];
        topLevelVariables.playerCards = [];
        topLevelVariables.usedCards = [];
        topLevelVariables.dealerScore = 0;
        topLevelVariables.playerScore = 0;
        topLevelVariables.playerFinish = false;
        topLevelVariables.playerBust = false;
        topLevelVariables.dealerBust = false;
        topLevelVariables.dealerFinish = false;
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
        TopGameControllers.enablePlayerButtons();
    },
    disablePlayerButtons: function() {
        $('#hitButton').prop('disabled', true)
        $('#stayButton').prop('disabled', true)
    },
    enablePlayerButtons: function() {
        $('#hitButton').prop('disabled', false)
        $('#stayButton').prop('disabled', false)  
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
        TopGameControllers.checkforBlackJack();
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
    determineWinner: function() {
        TopGameControllers.disablePlayerButtons();
        $('#startButton').prop('disabled', false);
        if (topLevelVariables.playerBust === true){
            setTimeout(function(){ alert("You busted! You lose!"); }, 650);
            topLevelVariables.lossScore += 1;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerBust === true){
            setTimeout(function(){ alert("Dealer busted! You win!"); }, 650);
            topLevelVariables.winScore += 1;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.playerScore > topLevelVariables.dealerScore){
            setTimeout(function(){ alert("You won!"); }, 650);
            topLevelVariables.winScore += 1;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerScore > topLevelVariables.playerScore){
            setTimeout(function(){ alert("You lose!"); }, 650);
            topLevelVariables.lossScore += 1;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerScore === topLevelVariables.playerScore){
            setTimeout(function(){ alert("It's a push"); }, 650);
            TopGameControllers.displayWinsLosses();
        }
    },
    checkforBlackJack: function() {
        DealerLogicController.calculateDealerScore();
        PlayerLogicController.calculatePlayerScore();
        if (topLevelVariables.dealerScore === 21 && topLevelVariables.dealerCards.length === 2){
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            setTimeout(alert("Dealer has Blackjack!"), 3000);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 750);
        } else if (topLevelVariables.playerScore === 21 && topLevelVariables.playerCards.length === 2){
            setTimeout(alert("You got Blackjack!"), 3000);
            setTimeout(function(){TopGameControllers.determineWinner(); }, 750);
        }
    },
    displayWinsLosses: function() {
        console.log(`Wins: ${topLevelVariables.winScore} Losses: ${topLevelVariables.lossScore}`);
        $('#winLossCounter').html(`<p>Wins: ${topLevelVariables.winScore} Losses: ${topLevelVariables.lossScore}</p>`);
    },
    calculateScore: function(userScore, cardsArray){
        console.log("Running calculateScore for " + userScore);
        userScore = 0;
        for (i = 0; i < cardsArray.length; i++){
            console.log(cardsArray.length);
            userScore += cardsArray[i].value;
            console.log(cardsArray[i].value);
        }
        console.log("Score is " + userScore);
        return userScore;
    }
}

var DealerLogicController = {
    calculateDealerScore: function(){
        topLevelVariables.dealerScore = TopGameControllers.calculateScore(topLevelVariables.dealerScore, topLevelVariables.dealerCards);
        // console.log("Running calculateDealerScore");
        // topLevelVariables.dealerScore = 0;
        // for (i = 0; i < topLevelVariables.dealerCards.length; i++){
        //     topLevelVariables.dealerScore += topLevelVariables.dealerCards[i].value;
        // }
        console.log("Dealer Score is " + topLevelVariables.dealerScore);
        // return
    },
    dealerGameLogic: function() {
        console.log("Running dealerGameLogic");
        $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
        $('#dealerScore span').text(topLevelVariables.dealerScore)
        if (topLevelVariables.dealerScore > 21) {
            console.log("dealerGameLogic: dealer has more than 21");
            for (i = 0; i < topLevelVariables.dealerCards.length; i++){
                console.log(topLevelVariables.dealerCards[i].value);
                if (topLevelVariables.dealerCards[i].value === 11){
                    topLevelVariables.dealerCards[i].value = 1;
                    $('#dealerScore span').text(topLevelVariables.dealerScore);
                    DealerLogicController.calculateDealerScore();
                    DealerLogicController.dealerGameLogic();
                    return
                }
            }
            topLevelVariables.dealerBust = true;
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            console.log(`Dealer Score: ${topLevelVariables.dealerScore}`);
            $('#dealerScore span').text(topLevelVariables.dealerScore);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
            return
        } else if (topLevelVariables.dealerScore >= 17){
            console.log("dealerGameFunction: dealer has more than 17");
            console.log('Dealer Stands on ' + topLevelVariables.dealerScore);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
        } else if (topLevelVariables.dealerScore < 17){
            console.log("dealerGameFunction: dealer has less than 17");
            DealerLogicController.hitDealerCard();
        }

    },
    hitDealerCard: function() {
        topLevelVariables.dealerCardNext = TopGameControllers.randomCard();
        topLevelVariables.dealerCards.push(topLevelVariables.dealerCardNext);
        $('#dealerHand').append(`<img src="${topLevelVariables.dealerCardNext.src}" />`);
        DealerLogicController.calculateDealerScore();
        DealerLogicController.dealerGameLogic();
        return topLevelVariables.dealerCards;
    },
}

var PlayerLogicController = {
    calculatePlayerScore: function(){
        topLevelVariables.playerScore = 0;
        for (i = 0; i < topLevelVariables.playerCards.length; i++){
            topLevelVariables.playerScore += topLevelVariables.playerCards[i].value;
        } if (topLevelVariables.playerScore > 21) {
            for (i = 0; i < topLevelVariables.playerCards.length; i++){
                if (topLevelVariables.playerCards[i].value === 11){
                    topLevelVariables.playerCards[i].value = 1;
                    $('#playerScore span').text(topLevelVariables.playerScore)
                    PlayerLogicController.calculatePlayerScore();
                    return
                }
            }
            topLevelVariables.playerBust = true;
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
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
        DealerLogicController.dealerGameLogic();
    }
};

$('#startButton').click(function() {
    if (topLevelVariables.newDealButton === false){
        TopGameControllers.enablePlayerButtons();
        TopGameControllers.startingCards();
        // PlayerLogicController.calculatePlayerScore();
        topLevelVariables.newDealButton = true;
        // console.log('Deal Button is now true');
    } else if (topLevelVariables.newDealButton === true){
        TopGameControllers.resetCards();
        $('#startButton').prop('disabled', true);
        setTimeout(function(){ 
            TopGameControllers.startingCards();
            PlayerLogicController.calculatePlayerScore();
        }, 1000)
        
    }
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
$('#resetCardButton').prop('disabled', true);
$('#testButton').click(function() {
    TopGameControllers.calculateScore(topLevelVariables.dealerScore, topLevelVariables.dealerCards);
})

// function addCardDisplay() {
//     // console.log(deckOfCards[0].name);
//     // $('#playerHand').append($)
// };

// // console.log(deckOfCards[0]);




TopGameControllers.disablePlayerButtons();

});