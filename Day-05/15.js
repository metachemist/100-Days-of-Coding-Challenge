"use strict";
/*let guests01: string[] = ["ayesha", "shahid", "haiqa", "laiba"];
guests01.forEach(guest01 => {
    console.log(`Hi ${guest01}, thanks for coming`)

});*/
let guests = ["ayesha", "shahid", "haiqa", "laiba"];
let unableToAttend = "ayesha";
console.log(`${unableToAttend} cant make it to dinner tonight`);
let newGuest = "abdul rehman";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`);
});
