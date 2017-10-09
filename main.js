var fs = require('fs');
var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');

var showCards = function() {
     fs.readFile('./log.txt', 'utf8', function(error, data) {
    
    if (error) {
        console.log('Error occurred: ' + error);
    } if (cardType=== jasonData[0].type){

    var basicCard = new BasicCard(jasonData[0].front,jasonData[0].back);
    console.log('front: ' + basicCard.front + ' | back: ' + basicCard.back);

    } else if(showCards === jasonData[1].type){

    var clozeCard = new ClozeCard(jasonData[1].text, jasonData[1].cloze);
    clozeCard.passed();

    }else{
    console.log('Sorry!');
    }

  });
}

showCards("BasicCard");
showCards("ClozeCard");
