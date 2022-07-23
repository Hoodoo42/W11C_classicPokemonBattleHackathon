// setting a variable that will get the serialized object that was selected
// set a variable that will hold the de-serialized object

let getPokemon = Cookies.get(`chosenPokemon`);
let iChooseYou = JSON.parse(getPokemon);

let getOpponent = Cookies.get(`compSelection`);
let opponent = JSON.parse(getOpponent);

let opponentHealth = Cookies.get(`opponentHealth`);
let yourHealth = Cookies.get(`playerHealth`)
// setting up the conditionals on which pokemon(object) will be diplayed on the page and how.

if (iChooseYou[`name`] === `Magikarp`) {
  // let battleArea = document.getElementById(`battle_grounds`);
  // battleArea[`innerHTML`] =
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `
        <section id="player_side">
           <img src ="${iChooseYou[`imgURL`]}">
           <h3 id="your_hp_display"> ${yourHealth}</h3>
           <button id="attack_button_one"> ${iChooseYou[`attack1`]} </button>
           <button id="attack_button_two"> ${iChooseYou[`attack2`]} </button>
           <button id="attack_button_three"> ${iChooseYou[`attack3`]} </button>
         </section>  
         
      `
  );
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
        <img src ="${opponent[`imgURL`]}">
        <h3 id="opponent_hp_display"> ${opponentHealth}</h3>
       
        </section>
        `
  );

  function mainAttack(details) {
    let attackPoints = opponentHealth - 2;
    Cookies.set(`opponentHealth`, attackPoints);
 
    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = attackPoints

}










} else if (iChooseYou[`name`] === `Mew`) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `
           <img src ="${iChooseYou[`imgURL`]}">
           <h3> ${iChooseYou[`health`]}</h3>
           <button> ${iChooseYou[`attack1`]} </button>
           <button> ${iChooseYou[`attack2`]} </button>
           <button> ${iChooseYou[`attack3`]} </button>
         
      `
  );
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
        <img src ="${opponent[`imgURL`]}">
        <h3> ${opponent[`health`]}</h3>
       
        </section>
        `
  );
} else if (iChooseYou[`name`] === `Frillish`) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `
               <img src ="${iChooseYou[`imgURL`]}">
               <h3> ${iChooseYou[`health`]}</h3>
               <button> ${iChooseYou[`attack1`]} </button>
               <button> ${iChooseYou[`attack2`]} </button>
               <button> ${iChooseYou[`attack3`]} </button>
             
          `
  );

  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
            <img src ="${opponent[`imgURL`]}">
            <h3> ${opponent[`health`]}</h3>
           
            </section>
            `
  );
}

let attackOne = document.getElementById(`attack_button_one`);
attackOne.addEventListener(`click`, mainAttack);
