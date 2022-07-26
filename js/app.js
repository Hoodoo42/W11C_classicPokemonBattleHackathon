// each function will create an object with onfo on the selected pokemon.
// it will then serialize the object
// then it will save the serialized object in a cookie

function chooseMagikarp(details) {
  let magikarp = {
    name: `Magikarp`,
    imgURL: `/images/magikarp.webp`,
    health: 50,
    attack1: `Splash`,
    attack2: `Struggle`,
    attack3: `Frusteration`,
  };

  let magikarpJson = JSON.stringify(magikarp);
  Cookies.set(`chosenPokemon`, magikarpJson);
  Cookies.set(`playerHealth`, magikarp[`health`]);

  let gengarJson = JSON.stringify(gengar);
  Cookies.set(`compSelection`, gengarJson);
  Cookies.set(`opponentHealth`, gengar[`health`]);

  location.href = `battle.html`;
}

function chooseMew(details) {
  let mew = {
    name: `Mew`,
    imgURL: `images/mew.webp`,
    health: 50,
    attack1: `Focus Blast`,
    attack2: `Solar Beam`,
    attack3: `Phycic`,
  };

  let mewJson = JSON.stringify(mew);
  Cookies.set(`chosenPokemon`, mewJson);
  Cookies.set(`playerHealth`, mew[`health`]);

  let gengarJson = JSON.stringify(gengar);
  Cookies.set(`compSelection`, gengarJson);
  Cookies.set(`opponentHealth`, gengar[`health`]);

  location.href = `battle.html`;
}

function chooseFrillish(details) {
  let frillish = {
    name: `Frillish`,
    imgURL: `/images/frillish.webp`,
    health: 50,
    attack1: `Water Absorb`,
    attack2: `Cursed Body`,
    attack3: `Poison Sting`,
  };

  let frillishJson = JSON.stringify(frillish);
  Cookies.set(`chosenPokemon`, frillishJson);
  Cookies.set(`playerHealth`, frillish[`health`]);

  let gengarJson = JSON.stringify(gengar);
  Cookies.set(`compSelection`, gengarJson);
  Cookies.set(`opponentHealth`, gengar[`health`]);

  location.href = `battle.html`;
}

let gengar = {
  name: `Gengar`,
  imgURL: `images/bad.webp`,
  health: 50,
  attack1: `Focus Blast`,
  attack2: `Shadow Punch`,
  attack3: `Sludge Wave`,
};

// these select an element by the id, and add the eventListener that will set the functions off
let fish = document.getElementById(`magikarp_button`);
fish.addEventListener(`click`, chooseMagikarp);

let mutant = document.getElementById(`mew_button`);
mutant.addEventListener(`click`, chooseMew);

let jellyFish = document.getElementById(`frillish_button`);
jellyFish.addEventListener(`click`, chooseFrillish);
