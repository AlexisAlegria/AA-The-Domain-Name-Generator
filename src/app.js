/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".us", ".io"];

const theDomainNameGenerator = (arr1, arr2, arr3, arr4) => {
  let domainName = "";
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      for (x = 0; x < arr3.length; x++) {
        for (y = 0; y < arr4.length; y++) {
          domainName = arr1 + arr2 + arr3 + arr4;
        }
      }
    }
  }
  return domainName;
};
console.log(theDomainNameGenerator(pronoun, adj, noun, extension));
