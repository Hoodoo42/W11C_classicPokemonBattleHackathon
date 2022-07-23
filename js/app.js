// each function will create an object with onfo on the selected pokemon. 
// it will then serialize the object
// then it will save the serialized object in a cookie

function chooseMagikarp(details) {
  let magikarp = {
    name: `Magikarp`,
    imgURL: `images/magikarp.webp`,
    health: 50,
    attack: [`splash`, `struggle`, `frustration`],
  };

  let magikarpJson = JSON.stringify(magikarp);
  Cookies.set(`chosenPokemon`, magikarpJson);
  location.href = `battle.html`;
}

function chooseMew(details) {
  let mew = {
    name: `Mew`,
    imgURL: `images/mew.webp`,
    health: 50,
    attack: [`splash`, `struggle`, `frustration`],
  };

  let mewJson = JSON.stringify(mew);
  Cookies.set(`chosePokemon`, mewJson);
  location.href = `battle.html`;
}

function chooseFrillish(details) {
  let frillish = {
    name: `Frillish`,
    imgURL: `images/frillish.webp`,
    health: 50,
    attack: [`splash`, `struggle`, `frustration`],
  };

  let frillishJson = JSON.stringify(frillish);
  Cookies.set(`chosenPokemon`, frillishJson);
  location.href = `battle.html`;
}


// these select an element by the id, and add the eventListener that will set the functions off
let fish = document.getElementById(`magikarp_button`);
fish.addEventListener(`click`, chooseMagikarp);

let mutant = document.getElementById(`mew_button`);
mutant.addEventListener(`click`, chooseMew);

let jellyFish = document.getElementById(`frillish_button`);
jellyFish.addEventListener(`click`, chooseFrillish);
