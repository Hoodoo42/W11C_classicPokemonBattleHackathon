// setting a variable that will get the serialized object that was selected
// set a variable that will hold the de-serialized object

let getPokemon = Cookies.get(`chosenPokemon`);
let iChooseYou = JSON.parse(getPokemon);

// setting up the conditionals on which pokemon(object) will be diplayed on the page and how.
if (iChooseYou[`name`] === `Magikarp`) {
}
