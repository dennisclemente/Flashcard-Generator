var BasicCard = require('./basicCard');
var ClozeCard = require('./clozeCard');
var cardLibrary = require('./cardJsonLib');

var fs = require("fs");

function card(showCards){
  fs.readFile('cardJsonLib.json','utf-8', function(err, data){
    if(err) console.log(err);

    cardData = JSON.parse(data);

    if(showCards === cardData[0].type){

      var basicCard = new BasicCard(cardData[0].front,cardData[0].back);
      console.log('front: ' + basicCard.front + ' | back: ' + basicCard.back);
    } 
    else if(showCards === cardData[1].type){

      var clozeCard = new ClozeCard(cardData[1].text, cardData[1].cloze);
      clozeCard.itMatches();
    }   
    else {
      console.log('Wrong. Try again!');
    }

  });
}

card("BasicCard");
card("ClozeCard");
