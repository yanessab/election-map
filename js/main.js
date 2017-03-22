var createPolitician = function(name, partyColor){

  var politician = {};

  politician.name = name;

  politician.partyColor = partyColor;

  politician.electionResults = null;

  politician.totalVotes = 0;

  // method for tallying votes, add to factory function above return statement

  politician.countTotalVotes = function()
  {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {

			this.totalVotes = this.totalVotes + this.electionResults[i];
		}

    console.log(this.totalVotes);

  };

  return politician;

};

var neal = createPolitician("Neal Caffrey", [132, 17, 11]);

var mac = createPolitician("Mac Taylor", [245, 141, 136]);

console.log(neal);
console.log(mac);

neal.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

mac.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

neal.electionResults[9] = 1;
mac.electionResults[9] = 28;

neal.electionResults[4] = 17;
mac.electionResults[4] = 38;

neal.electionResults[43] = 11;
mac.electionResults[43] = 27;

console.log(neal.electionResults);
console.log(mac.electionResults);

neal.countTotalVotes();
mac.countTotalVotes();



var winner = "";

if (neal.totalVotes > mac.totalVotes){
  winner = neal.name;
}

else if (neal.totalVotes < mac.totalVotes){
      winner = mac.name;
}

else {
  winner = "TIE";
}

console.log("AND THE WINNER IS..." + winner + "!!!");

console.log("Neal's color is: " + neal.partyColor);
console.log("Mac's color is: " + mac.partyColor);


var setStateResults = function(state){

  console.log(state);
  console.log(theStates[state]);

  theStates[state].winner = null;

  console.log('neal.electionResults', neal.electionResults);

  if (neal.electionResults[state] > mac.electionResults[state]) {
    theStates[state].winner = neal;
  }
  else if (neal.electionResults[state] < mac.electionResults[state]) {
    theStates[state].winner = mac;
  }

var stateTable = document.getElementById("stateResults");
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var name1 = body.children[0].children[0];
var results1 = body.children[0].children[1];
var name2 = body.children[1].children[0];
var results2 = body.children[1].children[1];
var winnerName = body.children[2].children[1];

var stateWinner = theStates[state].winner;

    if (stateWinner !== null){
      theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
      theStates[state].rgbColor = [11, 32, 57];
    }

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

    name1.innerText = neal.name;
    name2.innerText = mac.name;

    results1.innerText = neal.electionResults[state];
    results2.innerText = mac.electionResults[state];

    if (theStates[state].winner === null) {
      winnerName.innerText = "TIE";
    }
    else {
      winnerName.innerText = theStates[state].winner.name;
    }

  };


var topTable = document.getElementById("countryResults");
var rowTopTable = topTable.children[0].children[0];

rowTopTable.children[0].innerText = neal.name;
rowTopTable.children[1].innerText = neal.totalVotes;
rowTopTable.children[2].innerText = mac.name;
rowTopTable.children[3].innerText = mac.totalVotes;
rowTopTable.children[5].innerText = winner;
