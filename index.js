
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];

 function theBeatlesPlay(musicians, instruments) {
   let band = [];
   for(let i = 0; i < musicians.length; i++){
     let playsWhat = musicians[i] + ' plays ' + instruments[i];
     band.push(playsWhat);
   }
   return band;
 }
 
 
   function johnLennonFacts(facts) {
       let arr = [];
       let i = 0;
       while (i<facts.length) {
           i++
           let str = facts[i] + '!'
           arr.push(str);
       } 
       return arr
    }