var hand;
var cards = [];
var playerA = [];
var playerB = [];
var playerC = [];
var pairs = 0;
var pairs2 = 0;
var jokers = 0;
var flush = false;
var straight = false;
var numGen = [];
var deck = {
    1 : {value: "Two", numValue: 2, suit: "heart"},
	2 : {value: "Three", numValue: 3, suit: "heart"},
	3 : {value: "Four", numValue: 4, suit: "heart"},
	4 : {value: "Five", numValue: 5, suit: "heart"},
	5 : {value: "Six", numValue: 6, suit: "heart"},
	6 : {value: "Seven", numValue: 7, suit: "heart"},
	7 : {value: "Eight", numValue: 8, suit: "heart"},
	8 : {value: "Nine", numValue: 9, suit: "heart"},
	9 : {value: "Ten", numValue: 10, suit: "heart"},
	10 : {value: "Jack", numValue: 11, suit: "heart"},
	11 : {value: "Queen", numValue: 12, suit: "heart"},
	12 : {value: "King", numValue: 13, suit: "heart"},
	13 : {value: "Ace", numValue: 14, suit: "heart"},
	14 : {value: "Two", numValue: 2, suit: "diamond"},
	15 : {value: "Three", numValue: 3, suit: "diamond"},
	16 : {value: "Four", numValue: 4, suit: "diamond"},
	17 : {value: "Five", numValue: 5, suit: "diamond"},
	18 : {value: "Six", numValue: 6, suit: "diamond"},
	19 : {value: "Seven", numValue: 7, suit: "diamond"},
	20 : {value: "Eight", numValue: 8, suit: "diamond"},
	21 : {value: "Nine", numValue: 9, suit: "diamond"},
	22 : {value: "Ten", numValue: 10, suit: "diamond"},
	23 : {value: "Jack", numValue: 11, suit: "diamond"},
	24 : {value: "Queen", numValue: 12, suit: "diamond"},
	25 : {value: "King", numValue: 13, suit: "diamond"},
	26 : {value: "Ace", numValue: 14, suit: "diamond"},
	27 : {value: "Two", numValue: 2, suit: "spade"},
	28 : {value: "Three", numValue: 3, suit: "spade"},
	29 : {value: "Four", numValue: 4, suit: "spade"},
	30 : {value: "Five", numValue: 5, suit: "spade"},
	31 : {value: "Six", numValue: 6, suit: "spade"},
	32 : {value: "Seven", numValue: 7, suit: "spade"},
	33 : {value: "Eight", numValue: 8, suit: "spade"},
	34 : {value: "Nine", numValue: 9, suit: "spade"},
	35 : {value: "Ten", numValue: 10, suit: "spade"},
	36 : {value: "Jack", numValue: 11, suit: "spade"},
	37 : {value: "Queen", numValue: 12, suit: "spade"},
	38 : {value: "King", numValue: 13, suit: "spade"},
	39 : {value: "Ace", numValue: 14, suit: "spade"},
	40 : {value: "Two", numValue: 2, suit: "club"},
	41 : {value: "Three", numValue: 3, suit: "club"},
	42 : {value: "Four", numValue: 4, suit: "club"},
	43 : {value: "Five", numValue: 5, suit: "club"},
	44 : {value: "Six", numValue: 6, suit: "club"},
	45 : {value: "Seven", numValue: 7, suit: "club"},
	46 : {value: "Eight", numValue: 8, suit: "club"},
	47 : {value: "Nine", numValue: 9, suit: "club"},
	48 : {value: "Ten", numValue: 10, suit: "club"},
	49 : {value: "Jack", numValue: 11, suit: "club"},
	50 : {value: "Queen", numValue: 12, suit: "club"},
	51 : {value: "King", numValue: 13, suit: "club"},
	52 : {value: "Ace", numValue: 14, suit: "club"},
	53 : {value: "Joker", numValue: 0, suit: "joker"},
	54 : {value: "Joker", numValue: 0, suit: "joker"}

}

runProgram();

function runProgram(){
numGen.length = 0;
cards.length = 0;
playerA.length = 0;
playerB.length = 0;
playerC.length = 0;

while(numGen.length < 15){
    var randomnumber = Math.ceil(Math.random()*54)
    if(numGen.indexOf(randomnumber) > -1) continue;
    numGen[numGen.length] = randomnumber;
}

for(i = 0; i < numGen.length; i++) {
	cards.push(deck[numGen[i]]);
}

for(loop = 0; loop < 3; loop++){
	pairs = 0;
	pairs2 = 0;
	jokers = 0;
	flush = false;
	straight = false;

	if(loop === 0){
		var argument = playerA;
	}else if(loop === 1){
		var argument = playerB;
	}else{
		var argument = playerC
	}

	playerCheck(argument);
	jokerCheck(argument);
	straightFlushCheck(argument);
	pairCounter(argument);
	handCheck();
	printHand(argument);
	}
};

function playerCheck(arr){
		var m = 0;
		if(arr === playerB){
			m=m+5;
		}else if(arr === playerC){
			m=m+10;
		}
		for(i = m; i < 5+m; i++) {
			arr.push(cards[i]);
		}
		arr.sort(sortCards);
};

function sortCards(a,b) {
  if (a.numValue < b.numValue)
    return -1;
  if (a.numValue > b.numValue)
    return 1;
  return 0;
}

function jokerCheck(arr){
	for(var i = 0; i < cards.length; i++){
		if(arr[i].numValue === 0){
			jokers++;
		}else{
			return jokers;	
		}
	}
};

function straightFlushCheck(arr){
	var a = 0;
	var b = 0;
	var z = jokers;

	for(var i = 1+jokers; i < arr.length; i++){
		if(arr[jokers].suit === arr[i].suit){
			a++;
		}
	}

	if(a === arr.length-jokers-1){
		flush = true;
	}


	for(var i = 1; i < arr.length-jokers; i++){
		if(arr[jokers].numValue+i === arr[i+jokers].numValue){
			b++;
		}else if(z > 0){
			b++;
			z--;
		}
	}

	if(b === arr.length-1-jokers){
		straight = true;
	}
};


function pairCounter(arr){
	var j = jokers;
	var p = false;
	var a = 0;
	var b = 0;
	pairs = jokers;

	while(j < arr.length-1){
			for(var i = j+1; i < arr.length; i++){
				if(arr[j].numValue === arr[i].numValue){
					if(p === false){
						pairs++;
						a = arr[j].numValue;
					}else if(arr[j].numValue !== b){
						pairs2++;
					}
				}
			}
			j++;
			b = a;
			if(pairs-jokers > 0){
				p = true;
			}
		}
	};

function handCheck(){

		if(pairs === 4){
			hand = "Five of a kind";
			return hand;
		}else if(flush === true && straight === true){
			hand = "Straight flush";
			return hand;
		}else if(pairs === 3){
			hand = "Four of a kind";
			return hand;
		}else if(pairs2 === 2 || pairs2 === 1 && pairs === 2){
			hand = "Full house";
			return hand;
		}else if(flush === true){
			hand = "Flush";
			return hand;
		}else if(pairs === 2){
			hand = "Three of a kind";
			return hand;
		}else if(pairs === 1 && pairs2 === 1){
			hand = "Two pairs";
			return hand;
		}else if(pairs === 1){
			hand = "Two of a kind";
			return hand;
		}else{
			hand = "High card";
			return hand;
		}

};

function printHand(arr){
	document.write("Player "+(loop+1)+"'s hand:<br>")
	for(i = 0; i < arr.length; i++) {
		if(arr[i].value === "Joker"){
			document.write("Joker<br>")
		}else{
		    document.write(arr[i].value+" of "+arr[i].suit+"s<br>");
		}
	}

	document.write(hand+"<br><br>");
};
