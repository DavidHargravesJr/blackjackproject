//BLACKJACK OBJECTS
//CASINO LIBRARY

/*function Card(r,s){
this.rank = r
this.suit = s
this.cardName = r + " of " + s;
}

suits = ["diamonds", "clubs", "hearts", "spades"]
ranks = "A23456789TJQK"
deck = new Array(ranks.length * suits.length);

for (i = 0; i < suits.length; i++){
      for (j = 0; j < ranks.length; j++)
        deck[j + i * ranks.length] = new Card(ranks[j],suits[i]);
        }
console.log(deck)
*/


var suits =['Clubs','Diamonds','Hearts','Spades'];
var values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
function SingleCard(values,suits){
  this.value = values
  this.suit = suits
  this.cardName = values +" of "+suits;
  this.faceUp = true
  this.image = ""
  this.color = ""
}

var shoe  = []
var hand = []
var deck 

function createDeck(){
  var deck =[]
    for (a = 0; a < values.length; a++){
      for (b = 0; b < suits.length; b++){
        //deck.push(values[a]+" of "+suits[b])
        //card.value=values[a],card.suit=suits[b]
        var card = new SingleCard(values[a],suits[b])
        deck.push(card);
          //console.log(deck.length)
          shuffle(deck)
        
    }
  }
          console.log(deck)
  return deck
}
    function shuffle(deck) {
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
        
     }
}
   
/*function drawCard(){
  var hand = []
  hand.push(deck.SingleCard)
    console.log(hand)
}*/


createDeck()

