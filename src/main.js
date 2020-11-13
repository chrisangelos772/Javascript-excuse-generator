/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//array's for excuse, star wars theme
window.onload = function() {
  var excuse = document.getElementById("excuse");

  let who = ["The Sith lord", "Obi Wan", "Baby Yoda", "Han Solo"];

  let action = ["blasted", "light saber'd", "force crushed", "incinerated"];

  let what = [
    "my homework",
    "my hand",
    "the starship",
    "my home planet, deguba"
  ];

  let when = [
    "when the empire fell",
    "after the deathstar exploded",
    "during the clone wars"
  ];
  // curious why this was there vv
  //   let sentence = who[getRndInteger(o, who.length - 1)];
  //   $action[getRndInteger(o, action.length - 1)];
  //   $what[getRndInteger(o, what.length - 1)];
  //   $when[getRndInteger(o, when.length - 1)];

  let ranwho = who[Math.floor(Math.random() * who.length)];
  let ranaction = action[Math.floor(Math.random() * action.length)];
  let ranwhat = what[Math.floor(Math.random() * what.length)];
  let ranwhen = when[Math.floor(Math.random() * when.length)];
  document.querySelector(
    "#excuse"
  ).innerHTML = `${ranwho} ${ranaction} ${ranwhat} ${ranwhen}`;
};
