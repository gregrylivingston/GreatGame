

function beginGame(selectedCountry){
    myCountry = countryData.find(x=>x.properties.admin == selectedCountry);
    resetMap();
    if  (document.getElementById("mainMenu")!== null ){document.getElementById("mainMenu").remove()}
    gameState = "gamePlay";
    toggleTime();
    updateMenuDiv();
    buildPlayerDeck();
    newYear();
    rebuildMap();
}


function buildPlayerDeck(){
   myDeck = [];
   let thisDeck = policyDecks.find(x=>x.title==myCountry.properties.decks[currentPolicyDeck]);

      thisDeck.cards.forEach(x=>{
      for ( var i = 0 ; i < x.qty ; i ++ ){
          myDeck.push(x.id);
      }
  })
  shuffle(myDeck);
}

function rebuildMap(){
    var myLayer = buildLayer();
    myLayer.addTo(map);
}
