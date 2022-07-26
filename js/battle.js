// setting a variable that will get the serialized object(pokemon description) that was selected
// set a variable that will hold the de-serialized object

let getPokemon = Cookies.get(`chosenPokemon`);
let iChooseYou = JSON.parse(getPokemon);

let getOpponent = Cookies.get(`compSelection`);
let opponent = JSON.parse(getOpponent);

// these variable hold specifically the health values
let theOpponentHealth = Cookies.get(`opponentHealth`);
let yourHealth = Cookies.get(`playerHealth`);
// setting up the conditionals on which pokemon(object) will be diplayed on the page and how.

if (iChooseYou[`name`] === `Magikarp`) {
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `
        <section id="player_side">
           <img src ="${iChooseYou[`imgURL`]}">
           <h3 id="your_hp_display"> ${yourHealth}</h3>
           <button id="attack_button_one" class="disable" > ${
             iChooseYou[`attack1`]
           } </button>
           <button id="attack_button_two" class="disable"> ${
             iChooseYou[`attack2`]
           } </button>
           <button id="attack_button_three" class="disable"> ${
             iChooseYou[`attack3`]
           } </button>
         </section>  
         
      `
  );
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
        <img src ="${opponent[`imgURL`]}">
        <h3 id="opponent_hp_display"> ${theOpponentHealth}</h3>
       
        </section>
        `
  );
  // these functions will determin battle play. how much hp each attack will take, whats happens when someone get to 0.

  function mainAttack(details) {
    theOpponentHealth = theOpponentHealth - 2;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;
    // these if statements set the conditionals to a 0hp will end the match decalring who won and where to go next.

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      document.getElementsByClassName(`.disable`).disabled = true;
      function takeHome(details) {
        location.href = `index.html`;
        let nextMatch = document.getElementById(`next_match`);
        nextMatch.addEventListener(`click`, takeHome);
      }
    }
    // this renders a new hp value and saves it in the cookie
    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);
    // this takes the new hp and realtime displays it in the browser
    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      //   well this disable feature worked like a charm, until it suddenly didnt. it greyd out every attack button, and under that
      // was this lovely button that takes you home.  I will have to come back and troubleshoot.
      document.getElementsByClassName(`.disable`).disabled = true;
      // I wasnt entirely sure how to "end the match" so I just improvised with a home button. Though I am sure there is a way to
      // stop the gameplay capabitlites and refresh
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
    }
  }

  function secondAttack(details) {
    theOpponentHealth = theOpponentHealth - 4;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }

  function finalAttack(details) {
    theOpponentHealth = theOpponentHealth - 5;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }
} else if (iChooseYou[`name`] === `Mew`) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `<section id="player_side">
           <img src ="${iChooseYou[`imgURL`]}">
           <h3 id="your_hp_display"> ${iChooseYou[`health`]}</h3>
           <button id="attack_button_one" class="disable"> ${
             iChooseYou[`attack1`]
           } </button>
           <button id="attack_button_two" class="disable"> ${
             iChooseYou[`attack2`]
           } </button>
           <button id="attack_button_three" class="disable"> ${
             iChooseYou[`attack3`]
           } </button>
           </section> 
      `
  );
  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
        <img src ="${opponent[`imgURL`]}">
        <h3 id="opponent_hp_display"> ${theOpponentHealth}</h3>
       
        </section>
        `
  );

  function mainAttack(details) {
    theOpponentHealth = theOpponentHealth - 2;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 1;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }

  function secondAttack(details) {
    theOpponentHealth = theOpponentHealth - 4;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }

  function secondAttack(details) {
    theOpponentHealth = theOpponentHealth - 4;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }
} else if (iChooseYou[`name`] === `Frillish`) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `<section id="player_side">
               <img src ="${iChooseYou[`imgURL`]}">
               <h3 id="your_hp_display"> ${iChooseYou[`health`]}</h3>
               <button id="attack_button_one" class="disable"> ${
                 iChooseYou[`attack1`]
               } </button>
               <button id="attack_button_two" class="disable"> ${
                 iChooseYou[`attack2`]
               } </button>
               <button id="attack_button_three" class="disable"> ${
                 iChooseYou[`attack3`]
               } </button>
               </section> 
          `
  );

  document.body.insertAdjacentHTML(
    `afterbegin`,

    `<section id="opponent_side">
            <img src ="${opponent[`imgURL`]}">
            <h3 id="opponent_hp_display"> ${theOpponentHealth}</h3>
           
            </section>
            `
  );

  function mainAttack(details) {
    theOpponentHealth = theOpponentHealth - 2;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 1;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }
  function secondAttack(details) {
    theOpponentHealth = theOpponentHealth - 4;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }

  function secondAttack(details) {
    theOpponentHealth = theOpponentHealth - 4;
    Cookies.set(`opponentHealth`, theOpponentHealth);

    let opponentHp = document.getElementById(`opponent_hp_display`);
    opponentHp[`innerHTML`] = theOpponentHealth;

    if (theOpponentHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You win! </h2>
        <button id="next_match"> Next Match</button>
       
        `
      );
      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }

    yourHealth = yourHealth - 3;
    Cookies.set(`playerHealth`, yourHealth);

    let yourHp = document.getElementById(`your_hp_display`);
    yourHp[`innerHTML`] = yourHealth;

    if (yourHealth <= 0) {
      document.body.insertAdjacentHTML(
        `beforeend`,
        `
        <section>
        <h2> You lose! ${opponent[`name`]} got away! </h2>
        <button id="next_match"> Next Match</button>
        </section>
        `
      );

      function takeHome(details) {
        location.href = `index.html`;
      }
      let nextMatch = document.getElementById(`next_match`);
      nextMatch.addEventListener(`click`, takeHome);
      document.getElementsByClassName(`disable`).disabled = true;
    }
  }
}

// setting a variable to access the button with its id, then attaching an eventListener to "attack" when clicked
let attackOne = document.getElementById(`attack_button_one`);
attackOne.addEventListener(`click`, mainAttack);

let attackTwo = document.getElementById(`attack_button_two`);
attackTwo.addEventListener(`click`, secondAttack);

let attackThree = document.getElementById(`attack_button_three`);
attackThree.addEventListener(`click`, finalAttack);
