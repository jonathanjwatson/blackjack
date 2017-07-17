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
        return deckOfCards[cardIndex];
    },
    determineWinner: function() {
        TopGameControllers.disablePlayerButtons();
        $('#startButton').prop('disabled', false);
        if (topLevelVariables.playerBust === true){
            document.getElementById('buzzer').play();
            setTimeout(function(){ alert("You busted! You lose!"); }, 650);
            topLevelVariables.lossScore += 1;
            bettingVariables.playerTotal -= bettingVariables.playerBet;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerBust === true){
            setTimeout(function(){ alert("Dealer busted! You win!"); }, 650);
            document.getElementById('ta-da').play();
            topLevelVariables.winScore += 1;
            bettingVariables.playerTotal += bettingVariables.playerBet;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.playerScore > topLevelVariables.dealerScore){
            document.getElementById('ta-da').play();
            setTimeout(function(){ alert("You won!"); }, 650);
            topLevelVariables.winScore += 1;
            bettingVariables.playerTotal += bettingVariables.playerBet;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerScore > topLevelVariables.playerScore){
            document.getElementById('buzzer').play();
            setTimeout(function(){ alert("You lose!"); }, 650);
            topLevelVariables.lossScore += 1;
            bettingVariables.playerTotal -= bettingVariables.playerBet;
            TopGameControllers.displayWinsLosses();
        } else if (topLevelVariables.dealerScore === topLevelVariables.playerScore){
            setTimeout(function(){ alert("It's a push"); }, 650);
            TopGameControllers.displayWinsLosses();
        }
    },
    checkforBlackJack: function() {
        topLevelVariables.dealerScore = TopGameControllers.calculateScore(topLevelVariables.dealerScore, topLevelVariables.dealerCards);
        topLevelVariables.playerScore = TopGameControllers.calculateScore(topLevelVariables.playerScore, topLevelVariables.playerCards);
        if (topLevelVariables.dealerCards.length === 2 && topLevelVariables.dealerScore === 21){
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            setTimeout(alert("Dealer has Blackjack!"), 3000);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 750);
        } else if (topLevelVariables.playerCards.length === 2 && topLevelVariables.playerScore === 21){
            setTimeout(alert("You got Blackjack!"), 3000);
            setTimeout(function(){TopGameControllers.determineWinner(); }, 750);
        }
    },
    displayWinsLosses: function() {
        console.log(`Wins: ${topLevelVariables.winScore} Losses: ${topLevelVariables.lossScore}`);
        $('#winLossCounter').html(`<p>Wins: ${topLevelVariables.winScore} Losses: ${topLevelVariables.lossScore}</p>`);
    },
    calculateScore: function(userScore, cardsArray){
        userScore = 0;
        for (i = 0; i < cardsArray.length; i++){
            userScore += cardsArray[i].value;
        }
        return userScore;
    },
}
var DealerLogicController = {
    dealerGameLogic: function() {
        topLevelVariables.dealerScore = TopGameControllers.calculateScore(topLevelVariables.dealerScore, topLevelVariables.dealerCards);
        $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
        $('#dealerScore span').text(topLevelVariables.dealerScore)
        if (topLevelVariables.dealerScore > 21) {
            for (i = 0; i < topLevelVariables.dealerCards.length; i++){
                if (topLevelVariables.dealerCards[i].value === 11){
                    topLevelVariables.dealerCards[i].value = 1;
                    $('#dealerScore span').text(topLevelVariables.dealerScore);
                    DealerLogicController.dealerGameLogic();
                    return
                }
            }
            topLevelVariables.dealerBust = true;
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            $('#dealerScore span').text(topLevelVariables.dealerScore);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
            return
        } else if (topLevelVariables.dealerScore >= 17){
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
        } else if (topLevelVariables.dealerScore < 17){
            DealerLogicController.hitDealerCard();
            DealerLogicController.dealerGameLogic();
        }

    },
    hitDealerCard: function() {
        topLevelVariables.dealerCardNext = TopGameControllers.randomCard();
        topLevelVariables.dealerCards.push(topLevelVariables.dealerCardNext);
        topLevelVariables.$dealerHand.append(`<img src="${topLevelVariables.dealerCardNext.src}" />`);
        return topLevelVariables.dealerCards;
    },
}
var PlayerLogicController = {
    playerGameLogic: function(){
        topLevelVariables.playerScore = TopGameControllers.calculateScore(topLevelVariables.playerScore, topLevelVariables.playerCards);
        if (topLevelVariables.playerScore > 21) {
            for (i = 0; i < topLevelVariables.playerCards.length; i++){
                if (topLevelVariables.playerCards[i].value === 11){
                    topLevelVariables.playerCards[i].value = 1;
                    $('#playerScore span').text(topLevelVariables.playerScore)
                    PlayerLogicController.playerGameLogic();
                    return
                }
            }
            topLevelVariables.playerBust = true;
            $('#dealerCardOne').attr('src', topLevelVariables.dealerCardOne.src);
            setTimeout(function(){ TopGameControllers.determineWinner(); }, 850);
        }
        $('#playerScore span').text(topLevelVariables.playerScore)
        return topLevelVariables.playerScore;
    },
    hitPlayerCard: function () {
    topLevelVariables.playerCardNext = TopGameControllers.randomCard();
    topLevelVariables.playerCards.push(topLevelVariables.playerCardNext);
    $('#playerHand').append(`<img src="${topLevelVariables.playerCardNext.src}" />`);
    return topLevelVariables.playerCards;
    },
    stayPlayerCard: function(){
        PlayerLogicController.playerGameLogic();
        topLevelVariables.playerFinish = true;
        DealerLogicController.dealerGameLogic();
    }
};
$(function() {
$('#startButton').click(function() {
    document.getElementById('play').play();
    console.log(bettingVariables.playerTotal);
    if (topLevelVariables.newDealButton === false){
        $('#startButton').prop('disabled', true);
        TopGameControllers.enablePlayerButtons();
        TopGameControllers.startingCards();
        PlayerLogicController.playerGameLogic();
        // PlayerLogicController.calculatePlayerScore();
        topLevelVariables.newDealButton = true;
        // console.log('Deal Button is now true');
    } else if (topLevelVariables.newDealButton === true){
        TopGameControllers.resetCards();
        $('#startButton').prop('disabled', true);
        setTimeout(function(){ 
            TopGameControllers.startingCards();
            PlayerLogicController.playerGameLogic();
        }, 1000)
    }
});
$('#hitButton').click(function() {
    PlayerLogicController.hitPlayerCard();
    PlayerLogicController.playerGameLogic();
    document.getElementById('play').play();
});
$('#stayButton').click(function() {
    PlayerLogicController.stayPlayerCard();
    document.getElementById('play').play();
});
});